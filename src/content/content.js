const content = {
  AboutUs: {
    layout: {
      direction: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      text: 'Transforming Dreams into Reality',
    },
    subtitle: {
      text: 'In the context of business, value refers to the benefits or advantages a product, service, or proposition offers to customers or stakeholders.',
    },
    leftContent: {
      image: {
        src: 'https://picsum.photos/id/56/3000/2000', // Imagem de exemplo
        width: 400,
        height: 300,
        alt: 'Beautiful Landscape',
      },
    },
    rightContent: {
      title: {
        text: 'Business Achievement Mindset',
      },
      subtitle: {
        text: 'In the context of business, value refers to the benefits or advantages a product, service, or proposition offers to customers or stakeholders.',
      },

      buttons: {
        items: [
          {
            label: 'Learn More',
            variant: 'contained',
            endIcon: true,
            color: 'primary',
          },
        ],
        sx: { justifyContent: 'flex-start' },
      },
    },

    headerSlot: {
      text: 'Business',
      color: 'primary',
      variant: 'outlined',
      sx: { marginBottom: '8px' },
    },

    buttons: {
      items: [
        {
          label: 'Learn More',
          variant: 'contained',
          endIcon: '➜',
          color: 'primary',
        },
      ],
      sx: { justifyContent: 'flex-start' },
    },
  },
  hero: {
    layout: {
      direction: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
      text: 'Adapting and Thriving in a Changing World',
      sx: {
        maxWidth: '1120px',
        textAlign: 'center',

        mb: 3,
      },
    },
    subtitle: {
      text: 'Our comprehensive guide to strategies for entrepreneurs and leaders offers valuable insights, practical advice.',
      sx: {
        textAlign: 'center',
        maxWidth: '597px',
        mb: 5,
      },
    },

    image: {
      src: 'https://picsum.photos/id/56/3000/2000',
      width: 1260,
      height: 300,
      alt: 'Random Image',
    },
    buttons: {
      items: [
        { label: 'Get Started', variant: 'contained' },
        { label: 'Learn More', variant: 'outlined', endIcon: true },
      ],
      sx: {
        mt: 6,
      },
    },
  },
};

export default content;
