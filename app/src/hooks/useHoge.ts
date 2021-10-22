import { useState } from 'react';

const useHoge = <T>() => {
  const [hoge, setHoge] = useState<T>();
  const [fuga, setFuga] = useState<T>();
  const sayHoge = () => {
    console.log(hoge);
  }
  const sayFuga = () => {
    console.log(fuga)
  }

  return { hoge, setHoge, fuga, setFuga, sayHoge, sayFuga };
}

export default useHoge;