import { createContext, useContext } from "react";
import uischema from '../../../uischema.json';

const uiSchemaContext = createContext<{
    schema: object;
    changeSchema: (newSchema: object) => void;
}>({
    schema: uischema,
    changeSchema: () => {}
});

export const Provider = uiSchemaContext.Provider;
export const useUiSchema = () => {
  return useContext(uiSchemaContext);
}