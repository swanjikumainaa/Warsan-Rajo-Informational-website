import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
// import { FaLongArrowAltRight } from 'react-icons/fa';


import './style.css'
const Product = () => {
  return (
    <div className="">
        <h1 className="product-h1" data-testid= 'product' id= "Product">Product</h1>
        <div className="product">
    <div className="product-container">
      <div>
        <img className="product-image" src={process.env.PUBLIC_URL + '/images/book.png'} alt="Book Cover" width={300}/>
      </div>
      <div>
      {/* <FaLongArrowAltRight size={100} className="long-arrow"/>  */}
        <AiOutlineArrowRight size={10} className="long-arrow" data-testid="arrow-icon" />
      </div>
      <div>
        <img className="product-image1" src={process.env.PUBLIC_URL + '/images/rajo1.png'} alt="Rajo Device" width={900}/>
      </div>
    </div>
    <div className="product-text" data-testid= "rajo-text">
        <p className="productText">Rajo simplifies the recording of immunization data, enabling healthcare workers to efficiently capture crucial information 
          while providing NGOs with in-depth, analyzed insights into immunization coverage.
</p>
    </div>
    </div>
    </div>
  );
};
export default Product;