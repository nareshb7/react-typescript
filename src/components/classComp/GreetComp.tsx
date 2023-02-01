import React from 'react';

interface Props {
  val: string;
}

const GreetComp = ({ val }: Props) => {
  return (
    <div>
      <h1>Hello {val}</h1>
    </div>
  );
};
export default GreetComp;
