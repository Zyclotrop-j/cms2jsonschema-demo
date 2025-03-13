import { FC, useMemo, useState } from 'react';
import { UISchemaElement } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import RatingControl from './RatingControl';
import ratingControlTester from '../ratingControlTester';
import schema from '../schema.json';
import uischema from '../uischema.json';
import Editor from './Editor'
import { useUiSchema } from './Editor/components/uischemacontext';

const classes = {
  container: {
    padding: '1em',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
    marginBottom: '1rem',
  },
  resetButton: {
    margin: 'auto !important',
    display: 'block !important',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
};

const initialData = {
  name: 'Send email to Adrian',
  description: 'Confirm if you have passed the subject\nHereby ...',
  done: true,
  recurrence: 'Daily',
  rating: 3,
};

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: ratingControlTester, renderer: RatingControl },
];

export const JsonFormsDemo: FC = () => {
  const [data, setData] = useState<object>(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);
  const {schema: cschema} = useUiSchema();
  const stringifiedSchema = useMemo(() => JSON.stringify(cschema, null, 2), [cschema]);

  const clearData = () => {
    setData({});
  };

  return (
    <Grid
      container
      justifyContent={'center'}
      spacing={1}
      style={classes.container}>
      <Grid item sm={6}>
        <Typography variant={'h4'}>Editor</Typography>
        <div style={classes.dataContent}>
          <Editor />
        </div>
      </Grid>
      <Grid item sm={6}>
        <Typography variant={'h4'}>Preview</Typography>
        <div style={classes.demoform}>
          <JsonForms
            schema={schema}
            uischema={cschema as UISchemaElement}
            data={data}
            renderers={renderers}
            cells={materialCells}
            onChange={({ data }) => setData(data)}
          />
        </div>
      </Grid>
      <Grid item sm={4}>
        <Typography variant={'h4'}>Bound data</Typography>
        <div style={classes.dataContent}>
          <pre id="boundData">{stringifiedData}</pre>
        </div>
        <Button
          style={classes.resetButton}
          onClick={clearData}
          color="primary"
          variant="contained"
          data-testid="clear-data">
          Clear data
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Typography variant={'h4'}>Bound uischema</Typography>
        <div style={classes.dataContent}>
          <pre id="boundData">{stringifiedSchema}</pre>
        </div>
        <Button
          style={classes.resetButton}
          onClick={clearData}
          color="primary"
          variant="contained"
          data-testid="clear-data">
          Clear data
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Typography variant={'h4'}>Bound data schema</Typography>
        <div style={classes.dataContent}>
        <pre id="boundData">{JSON.stringify(schema, null, 2)}</pre>
        </div>
        <Button
          style={classes.resetButton}
          onClick={clearData}
          color="primary"
          variant="contained"
          data-testid="clear-data">
          Clear data
        </Button>
      </Grid>
    </Grid>
  );
};
