import React, { useState } from "react";
import "./SingleProduct.css";
import Header from './Header';
import Footer from './Footer';

const SingleProduct = ({}) => {
  
  // This product info use only to view the single product webpage. 
  const product={
    productName:"Watch",
    price:"Rs 500",
    description: "Fossil Grant Chronograph Black Dial Men's Watch-FS4832 | Band Color: Black: Band Material: Stainless Steel| Dial Color: Black, Case Shape: Round, Dial Glass Material: Mineral. Closure: Single Press Deployant | Case Material: Stainless Steel, Case Diameter: 44 millimeters. Strap Inner Circumference: 200+/- 5MM ",
    mainImage:"https://m.media-amazon.com/images/I/51f0gIYCcSL._UX425_.jpg",
    img1:"https://m.media-amazon.com/images/I/41wwxQyu69L._AC_SR320,320_.jpg",
    img2:"https://m.media-amazon.com/images/I/418RokHXdmL._AC_SR320,320_.jpg",
    img3:"https://images-eu.ssl-images-amazon.com/images/I/61lk-YxTUAL._AC_UL116_SR116,116_.jpg",
    img4:"https://m.media-amazon.com/images/I/61-CiRLFhqL._AC_SS450_.jpg",
}

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [mainImage, setMainImage] = useState(product.mainImage);

  const onImageHover=(new_img)=>{
    setMainImage(new_img)
    // product.main_Image=new_img
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    // add item  add to cart
  };

  const handleWishlist=()=>{
    setIsWishlisted(!isWishlisted);
  };

  const handleBuyNow = () => {
    // go to checkout page
  };
  
    return(
      <>
        <Header />
        <div className="product-page">

          {/* left container has  */}
          <div className="left-container">
            <img className='Main_Image' src={mainImage} alt="Product"/>
            <div className="image-gallery">
              <img src={product.img1}  alt='' onClick={()=>onImageHover(product.img1)}/>
              <img src={product.img2}  alt='' onClick={()=>onImageHover(product.img2)}/>
              <img src={product.img3}  alt='' onClick={()=>onImageHover(product.img3)}/>
              <img src={product.img4}  alt='' onClick={()=>onImageHover(product.img4)}/>
            </div>

            <div className='all_buttons'>
            <button className="cart_button" onClick={handleAddToCart}>Add to Cart</button>

            <div className="wishlist">
              <button className="cart_button" onClick={handleWishlist}>
              {isWishlisted ? "Remove from list" : "Add to wishlist"}
              {isWishlisted ? (
                <i className="list"></i>
              ) : (
                <i className="list"></i>
              )}
              </button>
            </div>

            <button className="cart_button" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>

          {/* Right container has products details */}
          <div className="right-container">
            <h1 className='product_block' >{product.productName}</h1>
            <p className="price block">{product.price}</p>

            <div className="size-container-block">
              <labels htmlFor="size">Size:</labels>
              <select className='select-size' name="size" id="size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            <div className="quantity-container-block">
              <label_quantity htmlFor="quantity">Quantity:</label_quantity>
              <input className='select-size'
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            <p className="description block"><b>Product Details:</b> {product.description}</p>
          </div>

        </div>
        <Footer />
      </>
    );
  };
  export default SingleProduct;