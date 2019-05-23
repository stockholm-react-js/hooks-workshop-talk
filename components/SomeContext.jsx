import React, { useContext } from 'react';
import SomeContextProvider, { SomeContext } from './someContext';
import Button from './Button.jsx';
import Input from './Input.jsx';

const SomeContextThing = () => (
  <SomeContextProvider initialValue="initial">
    <SomeInput />
    <SomeButton />
  </SomeContextProvider>
);

const SomeInput = () => {
  const { value, setValue } = useContext(SomeContext);
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
};

const SomeButton = () => {
  const { value } = useContext(SomeContext);
  return <Button>{value}</Button>;
};

export default SomeContextThing
