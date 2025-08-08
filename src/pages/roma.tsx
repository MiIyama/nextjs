import { Box, Button, Container, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';

const steps = ['Fórum Romano', 'Vias Misteriosas', 'Catacumbas de Saturno', 'Templos Sagrados', 'Monte Olimpo'];

export default function RomaGame() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#3b0764',
        color: '#E9D5FF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Jornada Épica Romana
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Explore os mistérios de Roma e alcance o Monte Olimpo.
        </Typography>

        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            mb: 4,
            '& .MuiStepLabel-label': { color: '#E9D5FF' },
            '& .MuiStepIcon-root': { color: '#4c1d95' },
            '& .MuiStepIcon-root.Mui-active': { color: '#C084FC' },
            '& .MuiStepIcon-root.Mui-completed': { color: '#C084FC' },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length - 1 ? (
          <Typography variant="h5" align="center">
            Você alcançou o Monte Olimpo!
          </Typography>
        ) : (
          <Box textAlign="center">
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                mt: 2,
                bgcolor: '#6b21a8',
                '&:hover': { bgcolor: '#581c87' },
              }}
            >
              Avançar
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
