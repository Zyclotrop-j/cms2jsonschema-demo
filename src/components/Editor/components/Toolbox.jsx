import { useEditor, Element } from '@craftjs/core';
import { Box, Typography, Grid, Button as MaterialButton } from '@mui/material';
import React from 'react';
import { VerticalLayout } from './user/VerticalLayout';
import { HorizontalLayout } from './user/HorizontalLayout';
import { Control } from './user/Control';
import { Group } from './user/Group';

const resolver = {
    VerticalLayout,
    HorizontalLayout,
    Control,
    Group, 
  }

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        
        {Object.entries(resolver).map(([key, Component]) => (
          <Grid container direction="column" item key={key}>
            <MaterialButton
              key={key}
              ref={(ref) => connectors.create(ref, <Element
                canvas
                is={Component}
                key={key}
                padding={20}
            >
                
            </Element>)}
              variant="contained"
              data-cy={`toolbox-${key}`}
            >
              {key}
            </MaterialButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
