/* eslint-disable import/no-anonymous-default-export */
import Hero from '@/library/components/organisms/Hero';

export default {
  title: 'Organisms/Hero',
  component: Hero,
  argTypes: {
    'title.sx.maxWidth': {
      control: 'text',
    },
    'title.sx.mb': {
      control: 'number',
    },
    'subtitle.sx.mb': {
      control: 'number',
    },
    'image.height': {
      control: 'number',
    },
    'image.fullWidth': {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    title: {
      text: 'Adapting and Thriving in a Changing World',
    },
    subtitle: {
      text: 'Our comprehensive guide to strategies for entrepreneurs and leaders offers valuable insights, practical advice.',
      sx: { mb: 5 },
    },
    image: {
      src: 'https://picsum.photos/id/56/3000/2000',
      alt: 'Random Image',
      height: 100,
      fullWidth: true,
    },
    layout: {
      alignItems: 'center',
      direction: 'column',
      justifyContent: 'center',
    },
  },
  render: (args) => (
    <Hero
      content={{
        ...args,
        title: {
          text: 'Adapting and Thriving in a Changing World',
          sx: {
            maxWidth: args['title.sx.mb'],
          },
        },
        subtitle: {
          text: 'Our comprehensive guide to strategies for entrepreneurs and leaders offers valuable insights, practical advice.',
          sx: { mb: 5 },
        },
        image: {
          src: 'https://picsum.photos/id/56/3000/2000',
          alt: 'Random Image',
          height: 100,
          fullWidth: true,
        },
      }}
    />
  ),
};
