import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';

const UserSidebar = () => {
  return(
    <div className="border-slate-200 border-r-2 rounded-r-md bg-[#cadfe5] h-screen w-16 duration-700 hover:rounded-none hover:w-96 hover:duration-500 flex flex-col relative">
      <p className="hover:visible hover:text-black">This is my sidebar!</p>
      <FontAwesomeIcon icon={faCalendar} className='text-white w-8 absolute left-3 top-20'/>
      <FontAwesomeIcon icon={faDumbbell} className='text-white w-8 absolute left-3 top-36'/>
    </div>
  );
};


export default UserSidebar;
