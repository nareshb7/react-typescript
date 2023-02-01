import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Comp1 from './Comp1';
import Todo from './todo/Index';
import { BtnClickCounter } from './btnClickCounter/Index';
import HelloIndex from './classComp/Index'

const RoutesComp = () => {
  return (
    <div>
      <Routes>
        <Route path="comp1" element={<Comp1 />} />
        <Route path="todo" element={<Todo />} />
        <Route path="btnclickcounter" element={<BtnClickCounter />} />
        <Route path='classComp' element={<HelloIndex />} />
      </Routes>
    </div>
  );
};
export default RoutesComp;
