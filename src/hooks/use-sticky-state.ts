import React, { useEffect } from 'react';

export default function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue) {
      setValue(JSON.parse(stickyValue).value);
    }
  }, [key]);

  useEffect(() => {
    const storage = { value };
    window.localStorage.setItem(key, JSON.stringify(storage));
  }, [key, value]);

  return [value, setValue];
}
