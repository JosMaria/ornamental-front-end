import '../stylesheets/Product.css'
import ProductInformation from './ProductInformation';

const Product = ({ id, imageName, commonName, scientistName, family, inConservation }) => {
  return (
    <div className={inConservation ? 'product-container conservation' : 'product-container'}>
      <img
        className='image-product'
        src={require(`../images/plant-number-${imageName}.png`)}
        alt='plant number one'
      />
      <ProductInformation
        commonName={commonName}
        scientistName={scientistName}
        family={family}
        inConservation={inConservation}
      />
    </div>
  );
};

export default Product;