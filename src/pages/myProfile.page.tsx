import Preview from '@/components/modules/myProfile/preview';
import UpdateProfileForm from '@/components/modules/myProfile/update-profile-form';
import React, { useState } from 'react'

export default function MyProfile() {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };


  return (
    <div className='w-full flex justify-center items-center'>
    {!editMode ? <Preview onEditMode={handleEditMode} /> : <div className='w-full max-w-md mx-auto'><UpdateProfileForm onEditMode={handleEditMode} /></div> }
    </div>
  )
}
