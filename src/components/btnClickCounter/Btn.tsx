import React, { useState } from 'react';

interface BtnProps {
  name: string;
  submitFunc?: (e: number) => void;
}

const Btn = ({ name, submitFunc }: BtnProps) => {
  const [count, setCount] = useState<number>(0);
  const handleFunc = () => {
    let result = count + 1;
    setCount(result);
    submitFunc(result);
  };
  return (
    <div>
      Btn
      <div>
        <button onClick={handleFunc}>{name}</button>
        <span>Clicked {count} times</span>
      </div>
    </div>
  );
};
export default Btn;
