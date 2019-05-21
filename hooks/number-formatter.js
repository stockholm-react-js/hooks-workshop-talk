import { useCallback, useLayoutEffect, useRef, useState } from 'react';

function cleanValue(value) {
  const numbers = value.replace(/\D/g, '');
  return numbers && parseInt(numbers, 10);
}

function formatValue(value) {
  return value.toLocaleString('sv-SE');
}

function useNumberFormatter(value, onChange) {
  const inputEl = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(null);

  useLayoutEffect(() => {
    if (cursorPosition !== null) {
      inputEl.current.selectionStart = cursorPosition;
      inputEl.current.selectionEnd = cursorPosition;
      setCursorPosition(null);
    }
  }, [cursorPosition, setCursorPosition]);

  const handleChange = useCallback(({ target: element }) => {
    const cleanedValue = cleanValue(element.value);

    const cleanedValueBeforeCursor = cleanValue(element.value.slice(0, element.selectionStart));
    const nextCursorPos = formatValue(cleanedValueBeforeCursor).length;
    setCursorPosition(nextCursorPos);

    onChange(cleanedValue);
  }, [onChange, setCursorPosition]);

  return {
    ref: inputEl,
    onChange: handleChange,
    value: formatValue(value),
  };
}

export default useNumberFormatter;
