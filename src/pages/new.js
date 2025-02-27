/* eslint-disable no-console */
import React from 'react';
import { Box } from '@mui/material';
import SectionBuilder from '../library/components/organisms_new/SectionBuilder';

const pageData = [
  {
    elType: 'container',
    settings: {
      position: 'relative',
      flex_direction: 'column',
      flex_justify_content: 'center',
      flex_align_items: 'center',
      background_color: '#FFFFFF',
      border: '1px solid pink',
      padding: {
        top: '20',
        right: '20',
        bottom: '20',
        left: '20',
      },
    },
    elements: [
      {
        elType: 'widget',
        widgetType: 'heading',
        settings: {
          title: 'Take Action Now',
          title_color: '#000000',
          typography_font_size: { size: '32' },
          align: 'center',
        },
      },
      {
        elType: 'widget',
        widgetType: 'text-editor',
        settings: {
          editor: "Let's create your next big project together.",
          text_color: '#333333',
          typography_font_size: { size: '18' },
          align: 'center',
        },
      },
      {
        elType: 'widget',
        widgetType: 'button',
        settings: {
          text: 'Get Started',
          background_color: '#1976D2',
          button_text_color: '#FFFFFF',
          border_radius: { top: '8' },
          text_padding: {
            top: '10',
            right: '20',
            bottom: '10',
            left: '20',
          },
          link: { url: '#' },
        },
      },
    ],
  },
  // {
  //   elType: 'container',
  //   settings: {
  //     position: 'relative',
  //     flex_direction: 'column',
  //     flex_justify_content: 'center',
  //     flex_align_items: 'center',
  //     background_color: '#F9F9FB',
  //     padding: {
  //       top: '30',
  //       right: '30',
  //       bottom: '30',
  //       left: '30',
  //     },
  //   },
  //   elements: [
  //     {
  //       elType: 'widget',
  //       widgetType: 'heading',
  //       settings: {
  //         title: 'Join Us Today',
  //         title_color: '#000000',
  //         typography_font_size: { size: '28' },
  //         align: 'center',
  //       },
  //     },
  //     {
  //       elType: 'widget',
  //       widgetType: 'text-editor',
  //       settings: {
  //         editor: 'Discover the benefits of our platform.',
  //         text_color: '#555555',
  //         typography_font_size: { size: '16' },
  //         align: 'center',
  //       },
  //     },
  //     {
  //       elType: 'widget',
  //       widgetType: 'button',
  //       settings: {
  //         text: 'Sign Up Now',
  //         background_color: '#FF5722',
  //         button_text_color: '#FFFFFF',
  //         border_radius: { top: '8' },
  //         text_padding: {
  //           top: '10',
  //           right: '20',
  //           bottom: '10',
  //           left: '20',
  //         },
  //         link: { url: '#' },
  //       },
  //     },
  //   ],
  // },
];

const Page = () => {
  return (
    <Box>
      {pageData.map((sectionData, index) => (
        <Box componente="SectionBuilderWrapper" key={index} sx={{ width: '100%', p: '20px', border: '5px solid black' }}>
          <SectionBuilder data={sectionData} />
        </Box>
      ))}
    </Box>
  );
};

export default Page;
