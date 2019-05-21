import React, { useState } from 'react';

import useNumberFormatter from '../hooks/number-formatter';
import Input from './Input';

function NumberInput() {
  const [value, setValue] = useState(0);
  const inputProps = useNumberFormatter(value, setValue);
  return (
    <Input {...inputProps} />
  );
}

export default NumberInput
