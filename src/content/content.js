/* eslint-disable prettier/prettier */
const content = {
  hero: {
    layout: {
      direction: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      text: 'Adapting and Thriving in a Changing World',
      sx: {
        textAlign: 'center', maxWidth: '1120px',mb:3
      },
    },
    subtitle: {
      text:  'Our comprehensive guide to strategies for entrepreneurs and leaders offers valuable insights, practical advice.',
      sx: {
        textAlign: 'center', maxWidth: '597px',mb:5
      },
    },
    buttons: {
      items: [
        { label: 'Get Started', variant: 'contained'},
        { label: 'Learn More', variant: 'outlined', endIcon: true  },
      ],
    },
  },
};

export default content;
