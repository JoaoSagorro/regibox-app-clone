'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserSidebar = () => {

  const router = useRouter();

  return(
    <div className="border-slate-200 border-r-2 rounded-r-md bg-[#cadfe5] h-screen w-16 duration-700 hover:rounded-none hover:w-96 hover:duration-500 flex flex-col relative">
      <p className="hover:visible hover:text-black">This is my sidebar!</p>
      <Link href={`${router.push("/classes")}`}>
        <FontAwesomeIcon icon={faCalendar} className='text-white w-8 absolute left-3 top-20'/>
      </Link>
      <FontAwesomeIcon icon={faDumbbell} className='text-white w-8 absolute left-3 top-36'/>
    </div>
  );
};


export default UserSidebar;
