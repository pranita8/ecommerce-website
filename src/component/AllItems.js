import React, { useState } from 'react'
import Lists from './List.css'
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import './AllIt.css';
import { AiOutlineHeart } from "react-icons/ai";

function AllItems() {
    const [items, setItems] = useState(ProductList);
    //filtering all the item using catagory 
    const filterItem = (categItem) => {
        const updatedItems = ProductList.filter((Elem) => {
            return Elem.category === categItem;
        });
        setItems(updatedItems);
    }
    return (
        <>
            <Link to="/allItems"><div className='list'>
            <div className='elements'>
                    <img className="images" src='https://e7.pngegg.com/pngimages/74/72/png-clipart-grocery-store-kabul-farms-supermarket-food-online-grocer-grocery-food-food-supermarket-thumbnail.png' alt='grocerey' />
                    <button className='products-button' onClick={() =>setItems(ProductList)}>All</button>
                </div>  


                <div className='elements'>
                    <img className="images" src='https://e7.pngegg.com/pngimages/74/72/png-clipart-grocery-store-kabul-farms-supermarket-food-online-grocer-grocery-food-food-supermarket-thumbnail.png' alt='grocerey' />
                    <button className='products-button' onClick={() => filterItem("grocery")}>Grocery</button>
                </div>

                <div className='elements'>
                    <img className="images" src='https://png.pngitem.com/pimgs/s/522-5229966_sweden-interior-design-hd-png-download.png' alt='Home' />
                    <button className='products-button' onClick={() => filterItem("home")}>Home</button>
                </div>
                
                <div className='elements'>
                      <img className="images" src='data:image/jpeg;base64,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' alt='Electronics' />
                      <button className='products-button' onClick={() => filterItem("electronics")}>Electronics</button>
                </div>
                <div className='elements'>
                    <img className="images" src='https://img.lovepik.com/free-png/20210919/lovepik-fashion-womens-summer-shopping-image-png-image_400391986_wh1200.png' alt='Fashion' />
                    <button className='products-button' onClick={() => filterItem("fashion")}>Fashion</button>
                </div>
                <div className='elements'>
                    <img className="images" src='https://e7.pngegg.com/pngimages/589/468/png-clipart-pile-of-books-the-book-stall-book-discussion-club-book-cover-book-design-book-stall-book-discussion-club.png' alt='Books' />
                   <button className='products-button' onClick={() => filterItem("books")}>Books</button>
                </div>
            </div>


            <div className='allcard-container'>
                {
                    items.map((curElem) => {
                        const { id,src, product, price } = curElem
                        return (
                            <div className='main-card--cointainer' key={id}>
                                   <Link className="wishlist" to="wishlisticon">
                                    <AiOutlineHeart className="heart"/>
                                   </Link>
                                <div className="card">
                                <div className='cardimage'>
                                <img src={src} />
                                </div>
                                <p>{product}</p>
                                <p>{price}</p>
                                <button className='addcart_button'><b>Add To Cart</b></button>

                                </div>
                            </div>
                        )

                    })
                }
          
            </div>
            </Link>

            
        </>
    )
}

export default AllItems;