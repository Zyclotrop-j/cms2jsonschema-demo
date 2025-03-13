import { useNode } from '@craftjs/core';
import { Box, FormControl, FormLabel } from '@mui/material';
import React from 'react';
import { HexColorPicker } from 'react-colorful';
import schema from '../../../../schema.json';
import { Input } from '@mui/icons-material';
import { Select, MenuItem } from '@mui/material';

const keys = Object.keys(schema.properties);

export const Control = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Box 
      direction="row"
      {...props}
      ref={(ref) => connect(drag(ref))}
      sx={{ p: 2, border: '1px dashed grey' }}
    >
      <p>Input: {props.scope?.replaceAll("/properties", "").replaceAll('/', '.')}</p>
    </Box>
  );
};

export const ControlSettings = () => {
  const {
    scope,
    actions: { setProp },
  } = useNode((node) => ({ }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Scope</FormLabel>
        <Select
          name="scope"
          value={scope}
          label="Scope"
          onChange={(event) => {
            setProp((props) => (props.scope = event.target.value), 500);
          }}
        >
          {keys.map((key) => (
            <MenuItem key={key} value={`#/properties/${key}`}>
              {`#/properties/${key}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
};

Control.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ControlSettings,
  },
  leaf: true,
};
