'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Users {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
}

const UserSidebar = ({ id, firstName, lastName, email }: Users) => {

  const router = useRouter();

  return(
    <div className="border-slate-200 border-r-2 rounded-r-md bg-[#cadfe5] h-screen w-16 duration-700 hover:rounded-none hover:w-96 hover:duration-500 flex flex-col relative">
      <p className="hover:visible hover:text-black">This is my sidebar!</p>
      {Users.map((user) => (
        <Link key={user.id} href={`/user/${encodeURIComponent(user.userId)}/classes`}>
          <FontAwesomeIcon icon={faCalendar} className='text-white w-8 absolute left-3 top-20'/>
        </Link>
      ))}
      <FontAwesomeIcon icon={faDumbbell} className='text-white w-8 absolute left-3 top-36'/>
    </div>
  );
};


export default UserSidebar;
