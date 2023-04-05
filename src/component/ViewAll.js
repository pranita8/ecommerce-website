
// import React,{useState} from 'react'
// import Header from './component/Header'
import Header from './Header'
import List from './List'
import './ViewAll.css'
// import React,{useState} from 'react'
// import Header from './component/Header'
// import ViewAlll from './ViewAll.css'
import Card from './Card'


function ViewAll() {
  const grocery_images = [
    {
      src: "https://m.media-amazon.com/images/I/51GyUUKe-0L._AC_UL320_.jpg",
      alt: "Product Image 1",
      product: "Oil",
      price: "Rs 139",
      desc: "Fortiune oil",
    },
    {
      src: "https://m.media-amazon.com/images/I/91eEvcDs51L._AC_UL320_.jpg",
      alt: "Product Image 2",
      product: "Pulses",
      price: "Rs 245",
      desc: "Moong Dal",
    },
    {
      src: "https://m.media-amazon.com/images/I/81+FF+RsymL._AC_UL320_.jpg",
      alt: "Product Image 3",
      product: "Atta",
      price: "Rs 300",
      desc: "Ashirvad Atta",
    },
    {
      src: "https://m.media-amazon.com/images/I/81Xzx5PHTFL._AC_UL320_.jpg",
      alt: "Product Image 4",
      product: "Maggie",
      price: "Rs 20",
      desc: "Maggie Noodels",
    },
    {
      src: "https://m.media-amazon.com/images/I/814iBcUf1aL._AC_UL320_.jpg",
      alt: "Product Image 5",
      product: "Cookies",
      price: "Rs 225",
      desc: "Unibic Cookies",
    },
    {
      src: "https://m.media-amazon.com/images/I/71foBxdA7tL._AC_UL320_.jpg",
      alt: "Product Image 6",
      product: "BournVita",
      price: "Rs 500",
      desc: "Health Drink",
    },
    {
      src: "https://m.media-amazon.com/images/I/81hqKpscwCL._AC_UL320_.jpg",
      alt: "Product Image 7",
      product: "Fruits",
      price: "Rs 100",
      desc: "Grapes",
    },
    {
      src: "https://m.media-amazon.com/images/I/71MekfPhKNL._AC_UL320_.jpg",
      alt: "Product Image 8",
      product: "Honey",
      price: "Rs 600",
      desc: "Dabur honey",
    },
    {
      src: "https://m.media-amazon.com/images/I/61SpB8J3HqL._AC_UL320_.jpg",
      alt: "Product Image 9",
      product: "Toothpaste",
      price: "Rs 50",
      desc: "Colgate Maxfresh",
    },
  ];

  return (
    <div>
    <Header/>
    <List/>
    <img  className ="Yourgrocery"src='https://food-ubc.b-cdn.net/wp-content/uploads/2020/02/Save-Money-On-Groceries_UBC-Food-Services.jpg' alt='grocery'/>
    <Card data={grocery_images}/>
    
     
    </div>
  )
}

export default ViewAll