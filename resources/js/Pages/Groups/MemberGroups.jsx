import NoDataFound from '@/Components/Miscellaneous/NoDataFound';
import MemberLayout from '@/Layouts/MemberLayout';
import { Inertia } from '@inertiajs/inertia';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Tooltip2 from '@/utils/Tooltip2';

const MemberGroups = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme.theme);
  const membershipId = useSelector((store) => store.user.value.membershipId);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get('/groups');
      setGroups(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  

  return (
    <MemberLayout>
      <div className={`${theme === 'light' ? 'gradientBg' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`}>
       
        <div className='flex items-center justify-center'>
          <h1 className='text-4xl font-semibold'>{t('Groups')}</h1>
        </div>
        {groups.length > 0 ? (
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {groups.map((data) => (
              <div key={data.id} className='h-[120px] w-[430px] rounded-md flex items-start justify-start space-x-6 border border-gray-500 p-4 bg-gray-700 cursor-pointer'>
                <img src={data.avatar} alt="profile" className='rounded-md w-[70px]' />
                <div className='flex flex-col items-start justify-start'>
                  <h1 className='text-xl capitalize'>{`${data.title}`}</h1>
                  <Tooltip2 className='italic' text={data.description ? data.description : ''} maxLength={80} />
                  {/* <h2 className='mt-2 font-bold'>From {data.start_time} to {data.end_time}</h2> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoDataFound />
        )}
      </div>
    </MemberLayout>
  );
};

export default MemberGroups;
