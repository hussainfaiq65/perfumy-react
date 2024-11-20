import React from 'react';
import one from '../Assets/Images/one.jpg';  // Check path correctness
import two from '../Assets/Images/two.jpg';  // Check path correctness
import three from '../Assets/Images/three.jpg';  // Check path correctness

function Product() {
  return (
    <div className="products">
      <div className="box">
        <img src={one} alt="Fogg Wood Extreme" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img src={three} alt="Villain Perfume" />
        <p>Villain Perfume, Eau De Parfum, Unique Fragrance, 100ml</p>
      </div>

      <div className="box">
        <img src={two} alt="Designer Club-Be Spoke" />
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume Premium Long Lasting Perfume</p>
      </div>
    </div>
  );
}

export default Product;
