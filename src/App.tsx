import './App.css';
import { useState, useCallback } from 'react';
import { JsonFormsDemo } from './components/JsonFormsDemo';
import { Provider } from './components/Editor/components/uischemacontext';
import uischema from './uischema.json';

const App = () => {
  const [schema, setSchema] = useState<object>(uischema);
  const changeSchema = useCallback((schema: object) => {
    setSchema(schema)
  }, [setSchema]);
  return (
    <Provider value={{
      schema,
      changeSchema
  }}>
      <JsonFormsDemo />
    </Provider>
  );
};

export default App;
