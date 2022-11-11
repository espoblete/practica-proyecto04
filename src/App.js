import './App.css';
import { Routes, Route } from 'react-router-dom'
import Errorcillo from './views/Errorcillo';
import Layout from './components/Layout'
import Home from './views/Home';
import Carta from './views/Carta';
import Reservas from './views/Reservas';
import Blog from './views/Blog';
import Acerca from './views/Acerca';
import Contacto from './views/Contacto';
import { Navigate } from 'react-router-dom';



function App() {
  return (

    <Routes>
      <Route path='/' element= {<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='carta' element={<Carta/>}/>
        <Route path='reservas' element={<Reservas/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='acerca' element={<Acerca/>}/>
        <Route path='contacto' element={<Contacto/>}/>
      </Route>
      <Route path='*' element={<Navigate replace to='/' />} />


    </Routes>
  );
}

export default App;
