import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowCategory from './Pages/ShowCategory';
import AddCategory from './Pages/AddCategory';
import ShowUser from './Pages/ShowUser';
import AddUser from './Pages/AddUser';
import ShowProducts from './Pages/ShowProducts';
import AddProducts from './Pages/AddProducts';
import ShowReview from './Pages/ShowReview';
import AddReview from './Pages/AddReview';
import UpdateCategory from './Pages/UpdateCategory';
import UpdateUser from './Pages/UpdateUser';
import UpdateProducts from './Pages/UpdateProducts';
import SignIn from './Pages/SignIn';
// import UpdateReview from './Pages/UpdateReview';


function App() {
  return (
    <>
  <BrowserRouter>
   
  <Routes>
    <Route path='' element={ <Home/>}></Route>

    <Route path='showcategory' element={<ShowCategory/>}></Route>
    <Route path='addcategory' element={<AddCategory/>}></Route>
    <Route path='/updatecat/:id' element={<UpdateCategory/>}></Route>

    <Route path='showuser' element={<ShowUser/>}></Route>
    <Route path='adduser' element={<AddUser/>}></Route>
    <Route path='/updateuser/:id' element={<UpdateUser/>}></Route>

    <Route path='showproducts' element={<ShowProducts/>}></Route>
    <Route path='addproducts' element={<AddProducts/>}></Route>
    <Route path='/updateprod/:id' element={<UpdateProducts/>}></Route>

    <Route path='showreview' element={<ShowReview />}></Route>
    <Route path='Addreview' element={<AddReview/>}></Route>
    {/* <Route path='/updatereview/:id' element={<UpdateReview/>}></Route> */}


    <Route path='signin' element={<SignIn/>}></Route>

  </Routes>
  </BrowserRouter>
    </>
   
  );
}

export default App;
