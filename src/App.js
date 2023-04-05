import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Slider from './component/Slider';
import Footer from './component/Footer';
import Product from './component/Product';
import Header from './component/Header';
import List from './component/List';
// import ViewAll from './component/ViewAll';
// import SingleProduct from './component/SingleProduct';
import { Route, Routes } from 'react-router-dom';

import AllItems from './component/AllItems';


// slider array images
function App() {

  // const slides = [
  //   { url: "https://www.compareraja.in/blog/wp-content/uploads/2014/01/flipkart-book-offers-1440x564_c.jpg" },
  //   { url: "https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg" },
  //   { url: "https://images.indianexpress.com/2020/11/Untitled-design-93.jpg" },
  //   { url: "https://www.lookinggoodfurniture.com/wp-content/uploads/2018/06/sofa-offer-banner.jpg" },
  //   { url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1593767938443/groceries-offers.jpg" },
  // ]

  const slides = [
    { url: "https://www.compareraja.in/blog/wp-content/uploads/2014/01/flipkart-book-offers-1440x564_c.jpg" },
    { url: "https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg" },
    { url: "https://images.indianexpress.com/2020/11/Untitled-design-93.jpg" },
    { url: "https://www.lookinggoodfurniture.com/wp-content/uploads/2018/06/sofa-offer-banner.jpg" },
    { url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1593767938443/groceries-offers.jpg" },
  ]

  return (
    <div className="App">
      <Routes>
        {/* home page */}
        
        <Route path='/' element={
          <>
            <Header/>
             <List />
             <Slider/>
            <div className="containerStyles">
            </div>
            {/* <ViewAll /> */}
            <Product />
            {/* <SingleProduct/> */}
            <Footer />
          </>} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/allItems' element={<AllItems/>}/>
        <Route path='/signup' element={<AllItems />} />
      </Routes>
   </div>
  );
}

export default App;
