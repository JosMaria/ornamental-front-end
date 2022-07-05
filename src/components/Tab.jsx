
import { AiOutlineCheck } from 'react-icons/ai'
import '../stylesheets/Tab.css'

export const Tab = ({ classification, isChecked }) => {
  return (
    <div className='tab-container'>
      <a className='text' href='#'>
        {classification}
      </a>
        <AiOutlineCheck className={isChecked ? 'icon-check checked' : 'icon-check'} />
    </div>
  );
};