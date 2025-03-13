import { useNode } from '@craftjs/core';
import { TextField, FormControl, FormLabel } from '@mui/material';

export const Group = ({ children = [], ...props }) => {
  const {
    isHovered,
    connectors: { connect, drag },
  } = useNode();
  return (
    <FormControl
      fullWidth={true}
      margin="normal"
      component="fieldset"
      {...props}
      ref={(ref) => connect(drag(ref))}
      sx={{ p: 4, m: 2, border: `1px dashed ${isHovered ? 'gray' : 'blue'}` }}
    >
      <FormLabel component="legend">{props.label}</FormLabel>
      {children}
    </FormControl>
  );
};

export const GroupSettings = () => {
  const {
    label,
    actions: { setProp },
  } = useNode((node) => ({}));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Label</FormLabel>
        <TextField name="label"
          value={label}
          label="Label"
          onChange={(event) => {
            setProp((props) => (props.label = event.target.value), 500);
          }}
          variant="outlined" />
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {

};

Group.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: GroupSettings,
  },
  
  leaf: false,
};
