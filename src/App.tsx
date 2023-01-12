/* eslint-disable jsx-quotes */
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main';
import Sales from './Sales';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}
