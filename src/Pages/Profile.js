import React, { useState } from 'react';
import { PiSelectionPlusBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import useTitle from '../Hooks/useTitle';

const Profile = () => {
    const [profileimg, setProfileimg] = useState('')
    const [profileMode, setProfileMode] = useState("edit")
    useTitle('প্রফাইল')

    const handleGetprofileImg = (imgfilepath) => {
        if(imgfilepath){
            const url = URL.createObjectURL(imgfilepath);
            setProfileimg(url)
        }
    }

    const editProfile = (e) => {
        e.preventDefault();
        setProfileMode('view')
    }   

    return (
        <div className='md:max-w-[1240px] mx-auto pt-20 lg:px-0 px-5'>
            {/* //view mode  */}
            <>
            {
                profileMode === 'view' &&
                <div className='flex items-start md:flex-row flex-col'>
                <div className='md:w-[30%]'>
                        <div onClick={() => setProfileMode("edit")} for="profile-pic" className={`w-[300px] h-[300px] ${!profileimg && 'border-2'} border-dashed   overflow-hidden rounded-full flex items-center justify-center border-[#64CCC5]`}>
                            {
                                !profileimg ?
                                <PiSelectionPlusBold className='text-white text-[80px]'></PiSelectionPlusBold>
                                :
                                <img className='w-full h-full' src={profileimg} alt="" />
                            }
                        </div>

                    <div className='mt-10 px-5'>
                        <h2 className='text-3xl text-gray-200 capitalize'>Sujoy Paul</h2>
                        <p className='mt-2 text-lg text-gray-300'>A good education can make you great. Let's create the thing..</p>

                        <button onClick={() => setProfileMode('edit')} className='text-md mt-5 py-2 rounded-md bg-[#182645] text-white w-full'>প্রফাইল এডিট করুন</button>

                        <p className='text-gray-400 mt-2'>এখানে দেওয়া তথ্য যে বানিয়েছে সে ছাড়া আর কেউই দেখতে পারবেনা। আরো জানতে  <Link to={'/privacy'} className='text-blue-500 underline'>এখানে ক্লিক করুন</Link>। </p>
                    </div>

                </div>

                <div className='md:w-[70%] p-5  rounded-md border-[#255855] md:mt-0 mt-10'>
                    <Dashboard></Dashboard>
                </div>

            </div>
            }
            </>

            {/* // edit mode  */}
            <>
            {
                profileMode === 'edit' &&
                <div className='flex items-start md:flex-row flex-col'>
                <div className='md:w-[30%]'>
                    <form onSubmit={editProfile}>
                    <label htmlFor="profile-pic" className='flex justify-center md:block'>
                        <div htmlFor="profile-pic" className={`w-[300px] h-[300px] ${!profileimg && 'border-2'} border-dashed   overflow-hidden rounded-full flex items-center justify-center border-[#64CCC5]`}>
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
                        {/* for name  */}
                        <label htmlFor="name" className='text-sm text-white'>তোমার নাম লেখো বাবুয়া </label> <br />
                        <input name='name' id='name' className='bg-transparent text-white mb-3 p-2 border-2 rounded-md w-full border-[#64CCC5]' type="text" placeholder='কমুনা আমার শরম করে' />
                        
                        {/* for bio  */}
                        <label htmlFor="bio" className='text-sm text-white'>নিজের সম্পর্কে কিছু লিখে যাও </label> <br />
                        <textarea className='bg-transparent text-white mb-3 p-2 h-32 border-2 rounded-md w-full border-[#64CCC5]' name="bio" id="" placeholder='টাকায় ছিনিমিনি করতাছে...?'></textarea>

                        <button className='text-md mt-5 py-2 rounded-md bg-[#182645] text-white w-full'>প্রফাইল সেইভ করুন</button>

                        {/* privacy policy  */}
                        <p className='text-gray-400 mt-2'>এখানে দেওয়া তথ্য যে বানিয়েছে সে ছাড়া আর কেউই দেখতে পারবেনা। আরো জানতে  <Link to={'/privacy'} className='text-blue-500 underline'>এখানে ক্লিক করুন</Link>। </p>
                    </div>
                    </form>
                </div>

                <div className='md:w-[70%] p-5  rounded-md border-[#255855] md:mt-0 mt-10'>
                    <Dashboard></Dashboard>
                </div>

            </div>
            }
            </>
            
            <h2 className='mt-10 text-lg text-left lg:pl-5 text-red-400 animate-pulse'>সামনে এগিয়ে যেতে এখনি প্রফাইলটি কমপ্লিট করুন। 🍹
            </h2>
        </div>
    );
};

export default Profile;