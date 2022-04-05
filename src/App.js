
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Reviews from './Components/Reviews/Reviews'
import NotFound from './Components/NotFound/NotFound'
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>}> </Route>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/reviews' element={<Reviews></Reviews>}> </Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}> </Route>
          <Route path='/blogs' element={<Blogs></Blogs>}> </Route>
          <Route path='*' element={<NotFound></NotFound>}> </Route>
        </Routes>
    </div>
  );
}

export default App;
