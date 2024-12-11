/* eslint-disable import/no-anonymous-default-export */
import Features from '@/library/components/organisms/Features';

export default {
  title: 'Organisms/Features',
  component: Features,
  argTypes: {
    proportions: {
      control: { type: 'array' },
    },
    itemsPerRow: {
      control: { type: 'number' },
    },
    headerSlot: {
      control: { type: 'object' },
    },
    'featuresProps.variant': {
      control: { type: 'select' },
      options: ['default', 'highlighted', 'simple'], // Opções disponíveis
    },
    'featuresProps.icon': {
      control: { type: 'boolean' }, // Control booleano
    },
    'featuresProps.iconOnSeparateLine': {
      control: { type: 'boolean' }, // Control booleano
    },
    items: {
      control: { type: 'array' },
    },
  },
};

export const Default = {
  args: {
    proportions: [12],
    itemsPerRow: 2,
    headerSlot: {
      text: 'Get Success Together!',
      sx: { color: 'brand-colors-600', border: '2px solid', typography: 'text-sm-semibold' },
    },
    title: {
      text: 'Transform Dreams into Reality',
    },
    subtitle: {
      text: 'In the context of business, advantages a product, service, or proposition offers to customers or stakeholders.',
    },
    featuresProps: {
      variant: 'simple',
      icon: true,
      iconOnSeparateLine: true,
    },
    items: [
      { title: 'Identify Core Features', description: 'This is the first feature.' },
      { title: 'Feature 2', description: 'This is the second feature.' },
      { title: 'Identify Core Features', description: 'This is the third feature.' },
      { title: 'Feature 4', description: 'This is the fourth feature.' },
      { title: 'Identify Core Features', description: 'This is the third feature.' },
      { title: 'Feature 4', description: 'This is the fourth feature.' },
    ],
  },
  render: (args) => (
    <Features
      content={{
        ...args,
        proportions: args.proportions,
        itemsPerRow: args.itemsPerRow,
        headerSlot: {
          text: args.headerSlot.text,
          sx: args['headerSlot.sx'],
        },
        featuresProps: {
          variant: args['featuresProps.variant'],
          icon: args['featuresProps.icon'],
          iconOnSeparateLine: args['featuresProps.iconOnSeparateLine'],
        },
        items: args.items,
      }}
    />
  ),
};
