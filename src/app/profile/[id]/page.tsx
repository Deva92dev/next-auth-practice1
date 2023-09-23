import React from 'react';

const UserProfile = ({ params }: any) => {
  return (
    <div className='flex flex-col justify-center items-center py-2 mb-4 min-h-screen '>
      <h1 className='text-2xl'>Profile</h1>
      <hr />
      <p className='text-4xl font-semibold'>
        Profile Page
        <span className='p-2 rounded ml-2 bg-orange-500 '>{params.id}</span>
      </p>
    </div>
  );
};

export default UserProfile;
