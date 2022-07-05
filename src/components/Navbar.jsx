import { Tab } from './Tab';
import { fetchClassifications } from '../functions/functions';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/Navbar.css'

const Navbar = () => {

  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetchClassifications(setTabs);
  }, [])

  return (
    <div className='navbar-container'>
      {
        tabs.map(tab =>
          <Tab
            key={uuidv4()}
            classification={tab}
            isChecked={false}
          />
        )
      }
    </div>
  );
};

export default Navbar;