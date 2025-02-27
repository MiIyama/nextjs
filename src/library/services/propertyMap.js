export const sharedProps = {
  layout: {
    position: 'position',
    flexDirection: 'flex_direction',
    justifyContent: 'flex_justify_content',
    alignItems: 'flex_align_items',
  },
  style: {
    backgroundColor: 'background_color',
    borderRadius: 'border_radius',
  },
  text: {
    text: 'editor',
    color: 'title_color',
    size: 'typography_font_size.size',
  },
  button: {
    bgColor: 'background_color',
    textColor: 'button_text_color',
    borderRadius: 'border_radius',
    padding: 'text_padding',
    link: 'link.url',
  },
  container: {
    backgroundColor: 'background_color',
    flexDirection: 'flex_direction',
    padding: 'padding',
  },
  heading: {
    text: 'title',
    color: 'title_color',
    size: 'typography_font_size.size',
  },
};

export const propertyMap = {
  heading: { ...sharedProps.text, ...sharedProps.heading },
  'text-editor': { text: 'editor', ...sharedProps.text },
  button: { ...sharedProps.button },
  container: { ...sharedProps.layout, ...sharedProps.style, ...sharedProps.container },
};
