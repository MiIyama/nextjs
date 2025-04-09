import Image from 'next/image';
import { Box } from '@mui/material';

// Função para remover "px" e converter para número
// const parsePx = (value) => (typeof value === 'string' ? parseInt(value.replace('px', ''), 10) : value);

const ResponsiveImage = ({ backgroundImage, width, minHeight, backgroundSize, backgroundPosition, flexDirection, borderRadius, ...props }) => {
  return width === '100%' ? (
    // Grupo 2 (Largura total, preenchimento completo)
    <Box a="ContainerImage - grupo 2/3" position="relative" overflow="hidden" sx={{ width, minHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', ...props }}>
      <Image src={backgroundImage.url} alt="Imagem de fundo" fill style={{ objectFit: backgroundSize, objectPosition: backgroundPosition }} />
    </Box>
  ) : (
    // Grupo 1, 4 e 5 (Largura parcial, altura fixa)
    <Box
      a="ContainerImage - outros"
      sx={{
        borderRadius,
        width, // Mantém a largura responsiva no Box
        height: minHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // Evita distorções e cortes
        position: 'relative', // Permite o uso do fill no Next.js
      }}
    >
      <Image
        src={backgroundImage.url}
        alt="Imagem de fundo"
        fill // Agora usa fill para ocupar a largura do Box pai
        style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
      />
    </Box>
  );
};

export default ResponsiveImage;
