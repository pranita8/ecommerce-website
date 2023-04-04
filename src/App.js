import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Slider from './component/Slider';
import Footer from './component/Footer';
import Header from './component/Header';
import List from './component/List';


// import Product from './component/Product';
import Product from './component/Product';
import Card from './component/Card';
import ViewAll from './component/ViewAll';
import { Route, Routes } from 'react-router-dom';
import AllItems from './component/AllItems';
// import Cart from './component/Cart';
// import { Scrollbars } from 'react-custom-scrollbars-2';




// slider array images
function App() {

  const slides = [
    { url: "https://www.compareraja.in/blog/wp-content/uploads/2014/01/flipkart-book-offers-1440x564_c.jpg"},
    { url: "https://www.compareraja.in/blog/wp-content/uploads/2014/01/flipkart-book-offers-1440x564_c.jpg" },
    { url: "https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg" },
    { url: "https://images.indianexpress.com/2020/11/Untitled-design-93.jpg" },
    { url: "https://www.lookinggoodfurniture.com/wp-content/uploads/2018/06/sofa-offer-banner.jpg" },
    { url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1593767938443/groceries-offers.jpg" },
  ]


  return (
    <div className="App">

     
  

        {/* <ViewAll/> */}
    
      <Routes>
        {/* home page */}
        <Route path='/' element={
          <><Header/>
          <AllItems/>
            {/* <List /> */}
            {/* <div className="containerStyles">
              <Slider slides={slides} />
            </div>
            <Product />
            <Footer /> */}
          </>} />
          <Route path="list" element={<>
            <Header/>
            <List/>
            <Footer/>
          </>}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
<<<<<<< HEAD
        <Route path='/allItems' element={<AllItems/>}/>
        {/* <Route path='/addcart' element={<Cart />}/> */}
=======
        <Route path='/signup' element={<AllItems />} />
         
>>>>>>> 60322acb648c6d1c08a0bbc61f6db9d00c9eb29a
      </Routes>


    </div>
  );
}

export default App;
