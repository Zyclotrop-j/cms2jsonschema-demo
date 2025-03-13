import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid2 as Grid } from '@mui/material';
import React, { useId } from 'react';

import { SettingsPanel } from './Editor/components/SettingsPanel';
import { Toolbox } from './Editor/components/Toolbox';
import { Topbar } from './Editor/components/Topbar';

import uischema from '../uischema.json';
import { VerticalLayout } from './Editor/components/user/VerticalLayout';
import { HorizontalLayout } from './Editor/components/user/HorizontalLayout';
import { Control } from './Editor/components/user/Control';
import { Group } from './Editor/components/user/Group';

const resolver = {
    VerticalLayout,
    HorizontalLayout,
    Control,
    Group,
  }

type element = {
    type: string,
    elements?: element[],
    scope?: string;
    options?: Record<string, unknown>
}
function render({ type, scope, elements = [], options = {} }: element) {
    const id = useId()
    if(!Object.keys(resolver).includes(type)) return "Invalid element";
    const Component = resolver[type as keyof typeof resolver];
    return (
        <Element
            canvas
            is={Component}
            key={id}
            scope={scope}
            {...options}
        >
            {elements.map(render)}
        </Element>
    );
}

export default function App() {
  return (
    <div>
      <Editor
        resolver={resolver}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: '10px' }}>
          <Grid size={8}>
            <Frame>
            {render(uischema)}
            </Frame>
          </Grid>
          <Grid size={4}>
            <Paper
              sx={{
                padding: 0,
                background: 'rgb(252, 253, 253)',
              }}
            >
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
