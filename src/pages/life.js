import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Box, Button, Typography, TextField, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Switch, FormControlLabel } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const birthDate = new Date('1996-06-26');
const today = new Date();
const lifeExpectancyYears = 90;

const defaultMilestones = {
  '2015-02-01': 'Comecei a faculdade',
  '2018-08-15': 'Primeiro emprego',
  '2022-11-03': 'Viagem pra fora',
};

export default function Home() {
  const [milestones, setMilestones] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newText, setNewText] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editText, setEditText] = useState('');
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [doubleClickTimer, setDoubleClickTimer] = useState(null);
  const [showOnlyMilestones, setShowOnlyMilestones] = useState(false);
  const calendarRef = useRef();
  const todayRef = useRef();
  const topRef = useRef();

  useEffect(() => {
    const stored = localStorage.getItem('milestones');
    if (stored) {
      setMilestones(JSON.parse(stored));
    } else {
      setMilestones(defaultMilestones);
      localStorage.setItem('milestones', JSON.stringify(defaultMilestones));
    }
  }, []);

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const handleAddMilestone = () => {
    if (!newDate || !newText) return;
    const updated = { ...milestones, [newDate]: newText };
    localStorage.setItem('milestones', JSON.stringify(updated));
    setMilestones(updated);
    setNewDate('');
    setNewText('');
    setShowForm(false);
  };

  const handleOpenEdit = useCallback(
    (dateKey) => {
      setEditDate(dateKey);
      setEditText(milestones[dateKey]);
      setEditDialogOpen(true);
    },
    [milestones]
  );

  const handleOpenNew = useCallback((dateKey) => {
    setEditDate(dateKey);
    setEditText('');
    setEditDialogOpen(true);
  }, []);

  const handleClickDate = useCallback(
    (dateKey) => {
      if (doubleClickTimer) {
        clearTimeout(doubleClickTimer);
        setDoubleClickTimer(null);
        handleOpenNew(dateKey);
      } else {
        const timer = setTimeout(() => {
          if (milestones[dateKey]) handleOpenEdit(dateKey);
          setDoubleClickTimer(null);
        }, 250);
        setDoubleClickTimer(timer);
      }
    },
    [doubleClickTimer, milestones, handleOpenEdit, handleOpenNew]
  );

  const handleSaveEdit = () => {
    const updated = { ...milestones, [editDate]: editText };
    localStorage.setItem('milestones', JSON.stringify(updated));
    setMilestones(updated);
    setEditDialogOpen(false);
  };

  const handleDeleteMilestone = () => {
    const updated = { ...milestones };
    delete updated[editDate];
    localStorage.setItem('milestones', JSON.stringify(updated));
    setMilestones(updated);
    setEditDialogOpen(false);
  };

  const livedDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  const percent = ((livedDays / (lifeExpectancyYears * 365)) * 100).toFixed(1);

  const calendar = useMemo(() => {
    const elements = [];
    const current = new Date(birthDate.getFullYear(), 0, 1);

    for (let y = 0; y < lifeExpectancyYears; y += 1) {
      const year = current.getFullYear();
      const months = [];

      for (let m = 0; m < 12; m += 1) {
        const daysInMonth = new Date(year, m + 1, 0).getDate();
        const days = Array.from({ length: daysInMonth }, (_, i) => {
          const d = i + 1;
          const thisDate = new Date(year, m, d);
          const dateKey = thisDate.toISOString().split('T')[0];
          const isToday = thisDate.toDateString() === today.toDateString();
          const isBirthday = thisDate.getDate() === 26 && thisDate.getMonth() === 5;
          const isPast = thisDate >= birthDate && thisDate <= today;
          const hasMilestone = Boolean(milestones[dateKey]);
          const ref = isToday ? todayRef : null;

          if (showOnlyMilestones && !hasMilestone && !isBirthday) return null;

          return (
            <Box
              key={d}
              ref={ref}
              data-date={dateKey}
              onClick={() => handleClickDate(dateKey)}
              sx={{
                width: '100%',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: { xs: 12, md: 12, lg: 15 },
                color: '#fff',
                backgroundColor: ['#4CAF50', '#FF9800', '#FF5722', '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688'][m],
                opacity: isPast ? 1 : 0.2,

                borderRadius: 1,
                outline: isToday ? '3px dashed #000' : 'none',
                outlineOffset: '-3px',
                position: 'relative',
                overflow: 'hidden',
                p: 1,
                border: '1px solid gray',
                cursor: 'pointer',
              }}
            >
              {isBirthday && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 3,
                    right: 3,
                    fontSize: 14,
                    color: '#FFD700',
                  }}
                >
                  🎂
                </Box>
              )}
              {`${String(d).padStart(2, '0')}/${String(m + 1).padStart(2, '0')}`}
              {hasMilestone && (
                <Tooltip title={milestones[dateKey]} arrow placement="top">
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 0,
                      height: 0,
                      rotate: '-90deg',
                      borderLeft: '15px solid transparent',
                      borderBottom: '15px solid white',
                    }}
                  />
                </Tooltip>
              )}
            </Box>
          );
        }).filter(Boolean);

        if (days.length > 0) {
          months.push(
            <Box
              key={m}
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(auto-fill, minmax(40px, 60px))',
                  sm: 'repeat(auto-fill, minmax(50px, 70px))',
                  md: 'repeat(auto-fill, minmax(50px, 66px))',
                  lg: 'repeat(auto-fill, minmax(63px, 75px))',
                },
                gap: '6px',
                marginBottom: '6px',
                width: '100%',
              }}
            >
              {days}
            </Box>
          );
        }
        current.setMonth(current.getMonth() + 1);
      }

      if (months.length > 0) {
        elements.push(
          <Box key={y} sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>{`${year} - ano ${y}`}</Typography>
            {months}
          </Box>
        );
      }
    }

    return elements;
  }, [milestones, handleClickDate, showOnlyMilestones]);

  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Box ref={topRef} />

      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
        Calendário da Vida
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
        <Button onClick={() => setShowForm(!showForm)}>Adicionar Marco</Button>
        <FormControlLabel control={<Switch checked={showOnlyMilestones} onChange={() => setShowOnlyMilestones((v) => !v)} />} label="Mostrar apenas dias com marcos e aniversários" />
      </Box>

      {showForm && (
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} size="small" />
          <TextField value={newText} onChange={(e) => setNewText(e.target.value)} placeholder="Ex: Consegui um estágio" size="small" />
          <Button onClick={handleAddMilestone}>Salvar</Button>
        </Box>
      )}

      <Typography id="info" sx={{ mb: 1 }}>
        Você já viveu {livedDays.toLocaleString()} dias de aproximadamente {(lifeExpectancyYears * 365).toLocaleString()} esperados.
      </Typography>

      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Progresso de Vida (%):
        </Typography>
        <Box sx={{ width: '100%', bgcolor: '#e0e0e0', borderRadius: 1 }}>
          <Box
            sx={{
              height: '24px',
              width: `${percent}%`,
              bgcolor: 'primary.main',
              borderRadius: 1,
              textAlign: 'center',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {percent}%
          </Box>
        </Box>
      </Box>

      <Box
        onClick={() => topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          background: '#000',
          color: '#fff',
          height: 40,
          width: 40,
          zIndex: 1000,
          borderRadius: 20,
          p: 'auto',
          m: 'auto',
        }}
      >
        <ArrowUpwardIcon
          sx={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            color: '#fff',
          }}
        />
      </Box>
      <Box id="progress-badge" sx={{ position: 'fixed', top: 20, right: 20, background: '#000', color: '#fff', px: 1.5, py: 0.5, borderRadius: 1, fontSize: 12, fontWeight: 'bold', zIndex: 999 }}>
        🕒 {percent}% da vida vivida
      </Box>
      <Button
        id="scrollButton"
        onClick={() => todayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
        sx={{
          position: 'fixed',
          top: 70,
          right: 20,
          background: '#000',
          color: '#fff',
          px: 2,
          py: 1,
          borderRadius: 2,
          zIndex: 1000,
          visibility: !showOnlyMilestones ? 'visible' : 'hidden',
        }}
      >
        Ir para Hoje
      </Button>

      <Box ref={calendarRef} className="life-calendar">
        {calendar}
      </Box>

      <Dialog fullWidth open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>{milestones[editDate] ? 'Editar Marco' : 'Adicionar Marco'}</DialogTitle>
        <DialogContent>
          <TextField fullWidth value={editText} onChange={(e) => setEditText(e.target.value)} multiline minRows={3} />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between', px: 3, pb: 2, pt: 0 }}>
          <Button onClick={handleDeleteMilestone} color="error" sx={{ visibility: milestones[editDate] ? 'visible' : 'hidden' }}>
            Apagar
          </Button>
          <Box>
            <Button onClick={() => setEditDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleSaveEdit} variant="contained">
              Salvar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
