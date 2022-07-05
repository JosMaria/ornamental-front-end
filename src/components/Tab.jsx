
import { AiOutlineCheck } from 'react-icons/ai'
import '../stylesheets/Tab.css'

export const Tab = ({ classification, isChecked, handleClick }) => {
  return (
    <div className='tab-container' onClick={handleClick}>
      <a className='text' href='#'>
        {classification}
      </a>
        <AiOutlineCheck className={isChecked ? 'icon-check checked' : 'icon-check'} />
    </div>
  );
};