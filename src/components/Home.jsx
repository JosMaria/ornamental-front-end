import { Catalog } from './Catalog';
import { Navbar } from './Navbar';
import { useState } from 'react';
import '../stylesheets/Home.css'

export const Home = () => {

  const [classification, setClassification] = useState('')

  return (
    <>
      <Navbar searchBy={setClassification} />
      <Catalog classification={classification} />
    </>
  );
};
