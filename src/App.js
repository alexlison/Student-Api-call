import logo from './logo.svg';
import './App.css';
import AddStudent from './Components/AddStudent';
import SearchStudent from './Components/SearchStudent';
import DeletStudent from './Components/DeleteStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllStudents from './Components/ViewAllStudents';
import Login from './Components/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={ <Login /> } />
    <Route path='add' element={ <AddStudent /> } />
    <Route path='search' element={ <SearchStudent /> } />
    <Route path='delete' element={ <DeletStudent /> } />
    <Route path='view' element={ <ViewAllStudents /> } />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
