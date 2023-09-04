import React, { useState } from 'react';
import { PiSelectionPlusBold } from "react-icons/pi";

const Profile = () => {
    const [profileimg, setProfileimg] = useState('')

    const handleGetprofileImg = (imgfilepath) => {
        const url = URL.createObjectURL(imgfilepath);
        setProfileimg(url)
    }

    return (
        <div className='w-[1240px] mx-auto pt-20'>
            <label htmlFor="profile-pic">
                <div for="profile-pic" className='w-[300px] h-[300px] border-2 border-dashed overflow-hidden rounded-full flex items-center justify-center'>
                    {
                        !profileimg ?
                        <PiSelectionPlusBold className='text-white text-[80px]'></PiSelectionPlusBold>
                        :
                        <img src={profileimg} alt="" />
                    }
                </div>
                <input onChange={(e) => handleGetprofileImg(e.target.files[0])} className='hidden' type="file" name="" id="profile-pic" />

            </label>
        </div>
    );
};

export default Profile;