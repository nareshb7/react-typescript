import * as React from 'react';
import Btn from './Btn'


export const BtnClickCounter = () => {
  const btnName: string = 'Click me'
  const submitFunc =(e: number) => {
    console.log(e, 'clicked')
  }
  return <div>Hellloo Btn
    <div>
      <Btn name={btnName} submitFunc={submitFunc}/>
    </div>
  </div>;
};
