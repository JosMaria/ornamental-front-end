import { Information } from './Information';
import { ProductIcon } from './ProductIcon';
import '../../stylesheets/product/Identification.css'

export const Identification = ({ commonName, scientistName, family, inConservation }) => {
  return (
    <div className={inConservation ? 'identification-container conservation' : 'identification-container'}>
      <Information
        commonName={commonName}
        scientistName={scientistName}
        family={family}
       />
       <ProductIcon
        inConservation={inConservation}
       />
    </div>
  );
};