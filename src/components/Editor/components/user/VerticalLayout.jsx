import { useNode } from '@craftjs/core';
import { Slider, Stack, FormControl, FormLabel } from '@mui/material';
import { Box } from '@mui/material';
import React, { Children } from 'react';
import { HexColorPicker } from 'react-colorful';

export const VerticalLayout = ({ children = [], ...props }) => {
  const {
    isHovered,
    connectors: { connect, drag },
  } = useNode();
  return (
    <Stack 
      direction="column"
      {...props}
      ref={(ref) => connect(drag(ref))}
      sx={{ p: 4, m: 2, border: `1px dashed ${isHovered ? 'gray' : 'blue'}` }}
    >
      {children}
    </Stack>
  );
};

export const VerticalLayoutSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({}));

  return (
    <div>
      
    </div>
  );
};

export const ContainerDefaultProps = {

};

VerticalLayout.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: VerticalLayoutSettings,
  },
  
  leaf: false,
};
