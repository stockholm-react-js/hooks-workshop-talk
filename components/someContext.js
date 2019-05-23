import { useState, useMemo, createContext } from 'react';

export const SomeContext = createContext();

function SomeContextProvider({ initialValue, children }) {
  const [state, setState] = useState(initialValue);
  const value = useMemo(() => ({
    value: state,
    setValue: setState,
  }), [state, setState]);

  return (
    <SomeContext.Provider value={value} >
      {children}
    </SomeContext.Provider>
  );
}

export default SomeContextProvider;
