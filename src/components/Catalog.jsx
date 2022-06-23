import Product from './Product'
import '../stylesheets/Catalog.css'

const Catalog = () => {
  return (
    <div className='catalog-container'>
      <Product nameImage='one' nameCommon='name common 1' nameScientist='name scientist 1' family='family 1' inConservation={true} />
      <Product nameImage='two' nameCommon='name common 2' nameScientist='name scientist 2' family='family 2' inConservation={false} />
      <Product nameImage='three' nameCommon='name common 3' nameScientist='name scientist 3' family='family 3' inConservation={false} />
      <Product nameImage='four' nameCommon='name common 4' nameScientist='name scientist 4' family='family 4' inConservation={false} />
      <Product nameImage='five' nameCommon='name common 5' nameScientist='name scientist 5' family='family 5' inConservation={true} />
      <Product nameImage='six' nameCommon='name common 6' nameScientist='name scientist 6' family='family 6' inConservation={false} />
      <Product nameImage='seven' nameCommon='name common 7' nameScientist='name scientist 7' family='family 7' inConservation={false} />
    </div>
  );
}

export default Catalog;