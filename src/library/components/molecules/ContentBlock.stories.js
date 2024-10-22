/* eslint-disable import/no-anonymous-default-export */
import ContentBlock from './ContentBlock';

export default {
  title: 'Components/ContentBlock',
  component: ContentBlock,
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['column', 'row'],
    },
    justifyContent: {
      control: { type: 'radio' },
      options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
    },
    alignItems: {
      control: { type: 'radio' },
      options: ['center', 'flex-start', 'flex-end', 'stretch', 'baseline'],
    },
    headerVariant: {
      control: { type: 'radio' },
      options: ['outlined', 'filled'],
    },
  },
};

export const Default = {
  args: {
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    headerVariant: 'outlined',
    headerText: 'Get Success Together!',
    titleText: 'Adapting and Thriving in a Changing World',
    imageSrc: 'https://picsum.photos/id/56/3000/2000',
    imageWidth: 1260,
    imageHeight: 300,
    imageAlt: 'Random Image',
  },
  render: (args) => (
    <ContentBlock
      content={{
        layout: {
          direction: args.direction,
          justifyContent: args.justifyContent,
          alignItems: args.alignItems,
        },
        headerSlot: {
          text: args.headerText,
          variant: args.headerVariant,
          sx: { color: 'brand-colors-600', border: '2px solid', typography: 'text-sm-semibold' },
        },
        title: {
          text: args.titleText,
          sx: {
            textAlign: 'center',
            maxWidth: '1120px',
            mb: 3,
          },
        },
        image: {
          src: args.imageSrc,
          width: args.imageWidth,
          height: args.imageHeight,
          alt: args.imageAlt,
        },
      }}
    />
  ),
};
