import { Identification } from './Identification';
import { ProductImage } from './ProducttImage';
import '../../stylesheets/product/Product.css'

export const Product = ({ id, urlImage, commonName, scientistName, family, inConservation }) => {
  return (
    <div className='product-container'>
      <ProductImage
        urlImage={urlImage}
      />
      <Identification
        commonName={commonName}
        scientistName={scientistName}
        family={family}
        inConservation={inConservation}
      />
    </div>
  );
};
