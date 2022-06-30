import Product from './Product'
import { useEffect, useState } from 'react';
import '../stylesheets/Catalog.css'
import { fetchAllPlants } from '../functions/functions';

const Catalog = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllPlants(setProducts);
  }, []);

  return (
    <div className='catalog-container'>
      {
        products.map(product =>
          <Product
            key={product.id}
            id={product.id}
            commonName={product['commonName']}
            scientistName={product.scientificName}
            family={product['family']}
            imageName={product.urlImage}
            inConservation={product.inConservation}
          />
        )
      }
    </div>
  );
}

export default Catalog;

/*
<Product id = '1' imageName='one' commonName='name common 1' scientistName='name scientist 1' family='family 1' inConservation={true} />
      <Product id = '2' imageName='two' commonName='name common 2' scientistName='name scientist 2' family='family 2' inConservation={false} />
      <Product id = '3' imageName='three' commonName='name common 3' scientistName='name scientist 3' family='family 3' inConservation={true} />
      <Product id = '4' imageName='four' commonName='name common 4' scientistName='name scientist 4' family='family 4' inConservation={false} />
      <Product id = '5' imageName='five' commonName='name common 5' scientistName='name scientist 5' family='family 5' inConservation={true} />
      <Product id = '6' imageName='six' commonName='name common 6' scientistName='name scientist 6' family='family 6' inConservation={false} />
      <Product id = '7' imageName='seven' commonName='name common 7' scientistName='name scientist 7' family='family 7' inConservation={false} />*/