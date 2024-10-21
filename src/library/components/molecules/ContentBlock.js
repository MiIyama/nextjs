/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import Subtitle from '@/library/components/atoms/Subtitle';
import Title from '@/library/components/atoms/Title';
import { Stack, Box } from '@mui/material';
import Button from '@/library/components/atoms/Button';
import Image from 'next/image';

const stackOptions = {
  direction: ['column', 'row'],
  justifyContent: ['center'],
  alignItems: ['flex-start', 'center', 'flex-end'],
};

// Combinações a serem evitadas (opcional)
const excludedCombinations = [
  { direction: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' },
];

// Função para verificar se uma combinação deve ser excluída
const isExcluded = (direction, justifyContent, alignItems) =>
  excludedCombinations.some(
    (comb) =>
      comb.direction === direction &&
      comb.justifyContent === justifyContent &&
      comb.alignItems === alignItems
  );

const ContentBlock = ({ content }) => {
  return (
    <>
      {stackOptions.direction.map((direction) =>
        stackOptions.justifyContent.map((justifyContent) =>
          stackOptions.alignItems.map((alignItems, index) => {
            if (isExcluded(direction, justifyContent, alignItems)) return null;

            return (
              <Box
                sx={{
                  border: '1px solid black',
                }}
                key={`${direction}-${justifyContent}-${alignItems}-${index}`}
              >
                <Box
                  sx={{
                    border: '1px solid red',
                    padding: '10px',
                    mt: 1,
                    mb: 10,
                  }}
                >
                  Direction: {direction}, Justify: {justifyContent}, Align:{' '}
                  {alignItems}
                </Box>

                <Stack
                  direction={direction}
                  sx={{
                    justifyContent,
                    alignItems,
                    padding: '10px',
                    marginBottom: '20px',
                    minHeight: '100px',
                  }}
                >
                  <Box>
                    {content.headerSlot && content.headerSlot}
                    {/* TODO:https://chatgpt.com/c/670cb563-8794-800a-893c-57f257b4b5b2 */}

                    <Title>{content.title}</Title>
                  </Box>
                  <Subtitle>{content.subtitle}</Subtitle>

                  {content.buttons?.items?.length > 0 && (
                    <Stack direction="row" spacing={2}>
                      {/* {content.buttons.items.map((button, idx) => (
                        <Button
                          key={idx}
                          variant={button.variant}
                          color={button.color}
                        >
                          {button.label}
                        </Button>
                      ))} */}
                    </Stack>
                  )}
                </Stack>

                <Image
                  src="https://picsum.photos/id/56/3000/2000"
                  width={1152}
                  height={300}
                  alt="Random Image"
                />
              </Box>
            );
          })
        )
      )}
      {/* 
      <Stack
        direction="row"
        sx={{
          justifyContent: 'left',
          alignItems: 'flex-end',
        }}
        spacing={0}
      >
        <Box>
          {content.headerSlot}
          TODO:https://chatgpt.com/c/670cb563-8794-800a-893c-57f257b4b5b2
          <Title>{content.title}</Title>
        </Box>
        <Subtitle>{content.subtitle}</Subtitle>
        <Stack direction="row" spacing={2}>
          {content.buttons.items.map((button, index) => (
            <Button key={index} variant={button.variant} color={button.color}>
              {button.label}
            </Button>
          ))}
        </Stack>
      </Stack> */}
    </>
  );
};

ContentBlock.propTypes = {
  content: PropTypes.shape({
    headerSlot: PropTypes.node,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          variant: PropTypes.string,
          color: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

ContentBlock.defaultProps = {
  sx: { my: '32px' },
};

export default ContentBlock;
