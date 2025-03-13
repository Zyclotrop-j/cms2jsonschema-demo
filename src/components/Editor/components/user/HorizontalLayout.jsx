import { useNode } from '@craftjs/core';
import { Slider, Stack, FormControl, FormLabel } from '@mui/material';
import { Box } from '@mui/material';
import React, { Children } from 'react';
import { HexColorPicker } from 'react-colorful';

export const HorizontalLayout = ({ children, ...props }) => {
  const {
    id,
    isHovered,
    connectors: { connect, drag },
  } = useNode();
  return (
    <Stack
    key={id} 
      direction="row"
      {...props}
      ref={(ref) => connect(drag(ref))}
      sx={{ p: 4, m: 2, border: `1px dashed ${isHovered ? 'gray' : 'blue'}` }}
    >
      {children}
    </Stack>
  );
};

export const HorizontalLayoutSettings = () => {
  const {
    actions: { setProp },
  } = useNode((node) => ({ }));

  return (
    <div>
    </div>
  );
};

export const ContainerDefaultProps = {

};

HorizontalLayout.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: HorizontalLayoutSettings,
  },
  leaf: false,
};
