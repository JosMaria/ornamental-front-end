import { Tab } from './Tab';
import { fetchClassifications } from '../functions/functions';
import { useEffect, useState } from 'react';
import '../stylesheets/Navbar.css'

export const Navbar = ({ searchBy }) => {

  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetchClassifications(setTabs);
  }, []);

  const handleClick = (event) => {
    setTabs(
      tabs.map(tab => {
        tab.isChecked = tab.nameClassification === event.target.textContent ? true : false;
        return tab
      }
    ));
    changeSearch();
  };

  const changeSearch = () => {
    const tabChecked = tabs.find(tab => tab.isChecked);
    searchBy(tabChecked ? tabChecked.nameClassification : '')
  };

  return (
    <div className='navbar-container'>
      {
        tabs.map(tab =>
          <Tab
            key={tab.key}
            classification={tab.nameClassification}
            isChecked={tab.isChecked}
            handleClick={handleClick}
          />
        )
      }
    </div>
  );
};