import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ChattingPage from './ChattingPage/ChattingPage';
import MessagesBox from './ChattingPage/Contacts/MessagesBox';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<MessagesBox/ >}></Route>
          <Route path = '/Login' element={<Login/ >}></Route>
          <Route path = '/Register' element={<Register/ >}></Route>
          <Route path = '/ChattingPage' element={<ChattingPage/ >}></Route>
          <Route path = '/MessagesBox' element={<MessagesBox/ >}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
