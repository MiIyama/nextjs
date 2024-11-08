const content = [
  {
    type: 'Services',
    props: {
      itemsPerRow: 1,
      headerSlot: {
        text: 'Get Success Together!',
        sx: { color: 'brand-colors-600', border: '2px solid', typography: 'text-sm-semibold' },
      },
      title: {
        text: 'aTransform Dreams into Reality',
      },
      subtitle: {
        text: 'In the context of business, advantages a product, service, or proposition offers to customers or stakeholders.',
      },
      featuresProps: {
        variant: 'simple',
        icon: true,
        imgOnSeparateLine: true,
      },
      items: [
        {
          title: {
            text: 'title1',
          },
          subtitle: {
            text: 'subtitle1',
          },
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
          buttons: {
            items: [{ label: 'Learn More1', variant: 'contained', endIcon: 'a', color: 'primary' }],
            sx: { justifyContent: 'flex-start', mt: 3 },
          },
        },
        {
          title: {
            text: 'title2',
          },
          subtitle: {
            text: 'subtitle2',
          },
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
          buttons: {
            items: [{ label: 'Learn More2', variant: 'contained', endIcon: 'a', color: 'primary' }],
            sx: { justifyContent: 'flex-start', mt: 3 },
          },
        },
      ],
    },
  },
  {
    type: 'Features',
    props: {
      itemsPerRow: 1,
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
      },
      items: [
        {
          title: 'Identify Core Features',
          description: 'This is the first feature.',
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
        },
        {
          title: 'Feature 2',
          description: 'This is the second feature.',
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
        },
        {
          title: 'Identify Core Features',
          description: 'This is the third feature.',
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
        },
        {
          title: 'Feature 4',
          description: 'This is the fourth feature.',
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
        },
        {
          title: 'Identify Core Features',
          description: 'This is the third feature.',
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
        },
        {
          title: 'Feature 4',
          description: 'This is the fourth feature.',
          image: {
            src: 'https://picsum.photos/id/56/3000/2000',
            height: 300,
            alt: 'Beautiful Landscape',
          },
        },
      ],
    },
  },
  {
    type: 'AboutUs',
    title: {
      text: 'Experiences Shared by Our Clients',
    },
  },
  {
    type: 'Hero',
    props: {
      title: {
        text: 'Adapting and Thriving in a Changing World',
        sx: { maxWidth: '1150px', mb: 3 },
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
    },
  },
  {
    type: 'AboutUs',
    props: {
      title: { text: 'Transforming Dreams into Reality' },
      subtitle: {
        text: 'In the context of business, value refers to the benefits or advantages a product, service, or proposition offers to customers or stakeholders.',
      },
      leftContent: {
        image: {
          src: 'https://picsum.photos/id/56/3000/2000',
          height: 300,
          alt: 'Beautiful Landscape',
        },
      },
      rightContent: {
        title: { text: 'Business Achievement Mindset' },
        subtitle: {
          text: "In the context of business, value refers to the benefits or advantages a product, service, or proposition offers to customers or stakeholders. It's about meeting the needs, solving the problems, or fulfilling the desires of customers in a way that exceeds their expectations and delivers meaningful outcomes.",
        },
        buttons: {
          items: [{ label: 'Learn More', variant: 'contained', endIcon: 'a', color: 'primary' }],
          sx: { justifyContent: 'flex-start', mt: 3 },
        },
      },
      footerContent: {
        subtitle: {
          text: "At its core, transforming dreams into reality begins with a clear vision. It's about envisioning the future you desire and setting goals that align with your dreams.",
        },
      },
    },
  },
  {
    type: 'AboutUs',
    props: {
      title: { text: 'asas into Reality' },
      subtitle: {
        text: 'In the context of business, value refers to the benefits or advantages a product, service, or proposition offers to customers or stakeholders.',
      },
      leftContent: {
        image: {
          src: 'https://picsum.photos/id/56/3000/2000',
          height: 300,
          alt: 'Beautiful Landscape',
        },
      },
      rightContent: {
        title: { text: 'Business Achievement Mindset' },
        subtitle: {
          text: "In the context of business, value refers to the benefits or advantages a product, service, or proposition offers to customers or stakeholders. It's about meeting the needs, solving the problems, or fulfilling the desires of customers in a way that exceeds their expectations and delivers meaningful outcomes.",
        },
        buttons: {
          items: [{ label: 'Learn More', variant: 'contained', endIcon: 'a', color: 'primary' }],
          sx: { justifyContent: 'flex-start', mt: 3 },
        },
      },
    },
  },
];

export default content;
