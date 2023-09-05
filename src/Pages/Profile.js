import React, { useState } from 'react';
import { PiSelectionPlusBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profileimg, setProfileimg] = useState('')

    const handleGetprofileImg = (imgfilepath) => {
        const url = URL.createObjectURL(imgfilepath);
        setProfileimg(url)
    }

    return (
        <div className='max-w-[1240px] mx-auto pt-20'>
            <div className='flex items-start'>
                <div className='w-[30%]'>
                    <label htmlFor="profile-pic">
                        <div for="profile-pic" className='w-[300px] h-[300px] border-2 border-dashed overflow-hidden rounded-full flex items-center justify-center border-[#64CCC5]'>
                            {
                                !profileimg ?
                                <PiSelectionPlusBold className='text-white text-[80px]'></PiSelectionPlusBold>
                                :
                                <img className='w-full h-full' src={profileimg} alt="" />
                            }
                        </div>
                        <input onChange={(e) => handleGetprofileImg(e.target.files[0])} className='hidden' type="file" name="" id="profile-pic" />

                    </label>

                    <div className='mt-10 px-5'>
                        <h2 className='text-3xl text-gray-200 capitalize'>Sujoy Paul</h2>
                        <p className='mt-2 text-lg text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure dolore.</p>

                        <button className='text-md mt-5 py-2 rounded-md bg-[#182645] text-white w-full'>প্রফাইল এডিট করুন</button>

                        <p className='text-gray-400 mt-2'>এখানে দেওয়া তথ্য যে বানিয়েছে সে ছাড়া আর কেউই দেখতে পারবেনা। আরো জানতে  <Link to={'/privacy'} className='text-blue-500 underline'>এখানে ক্লিক করুন</Link>। </p>
                    </div>

                </div>

                <div className='w-[70%] p-5 border-2 border-dotted rounded-md border-[#64CCC5]'>
                    <h1 className='text-4xl  text-white'>ড্যাশবোর্ড</h1>
                </div>

            </div>
        </div>
    );
};

export default Profile;