import '../stylesheets/Product.css'
import ProductInformation from './ProductInformation';

const Product = ({ nameImage, nameCommon, nameScientist, family, inConservation }) => {
  return (
    <div className={inConservation ? 'product-container conservation' : 'product-container'}>
      <img
        className='image-product'
        src={require(`../images/plant-number-${nameImage}.png`)}
        alt='plant number one'
      />
      <ProductInformation
        nameCommon={nameCommon}
        nameScientist={nameScientist}
        family={family}
      />
    </div>
  );
};

export default Product;