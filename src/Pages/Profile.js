import React, { useState } from 'react';
import { PiSelectionPlusBold } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import useTitle from '../Hooks/useTitle';
import boy1 from '../Assets/Avatar/boy1.png'
import boy2 from '../Assets/Avatar/boy2.png'
import girl1 from '../Assets/Avatar/girl1.png'
import girl2 from '../Assets/Avatar/girl2.png'

const Profile = () => {
    useTitle('প্রফাইল')
    const navigate = useNavigate()
    const [profileimg, setProfileimg] = useState('')
    console.log(profileimg)

    const profileMode = JSON.parse(localStorage.getItem('profile-sq'));
    const {photoURL, name, bio} = profileMode[0];

    const checkStatus = localStorage.getItem('status');

    if(!checkStatus && !localStorage.getItem('profile-sq')){
        navigate('/')
    }

    const profilePicturs = [
        {name: 'boy1', img: boy1},
        {name: 'boy2', img: boy2},
        {name: 'girl1', img: girl1},
        {name: 'girl2', img: girl2}
    ]


    const editProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const bio = form.bio.value;
        
        // const profile = JSON.parse(localStorage.getItem('profile-sq'));
        profileMode[0].name = name;
        profileMode[0].bio = bio;
        profileMode[0].photoURL = profileimg;
        profileMode[0].verify = true;
        
        localStorage.setItem('profile-sq', JSON.stringify(profileMode))
        
        // setProfileMode('view')
        profileMode[0].profile_mode = "view";
        localStorage.setItem('profile-sq', JSON.stringify(profileMode))
        window.location.reload()
    }

    const changeProfileMode = (task) => {
        profileMode[0].profile_mode = task;
        localStorage.setItem('profile-sq', JSON.stringify(profileMode))
        window.location.reload()
    }
    

    return (
        <div className='md:max-w-[1240px] mx-auto pt-10 lg:px-0 px-5 '>
            {/* create mode default */}
            <>
            {
                profileMode[0].profile_mode === 'create' &&
                <div className='flex items-start md:flex-row flex-col'>
                <div className='md:w-[30%]'>
                        <div onClick={() => changeProfileMode('edit')} htmlFor="profile-pic" className={`w-[300px] h-[300px] ${!profileimg && 'border-2'} border-dashed   overflow-hidden rounded-full flex items-center justify-center border-[#64CCC5]`}>
                                <PiSelectionPlusBold className='text-white text-[80px]'></PiSelectionPlusBold>
                        </div>

                    <div className='mt-10 px-5'>
                        {/* <h2 className='text-3xl text-gray-200 capitalize'>{name}</h2>
                        <p className='mt-2 text-lg text-gray-300'>{bio}</p> */}

                        <button onClick={() => changeProfileMode('edit')} className='text-md mt-5 py-2 rounded-md bg-[#182645] text-white w-full'>প্রফাইল এডিট করুন</button>

                        <p className='text-gray-400 mt-2'>এখানে দেওয়া তথ্য যে বানিয়েছে সে ছাড়া আর কেউই দেখতে পারবেনা। আরো জানতে  <Link to={'/privacy'} className='text-blue-500 underline'>এখানে ক্লিক করুন</Link>। </p>
                    </div>

                </div>

                <div className='md:w-[70%] p-5  rounded-md border-[#255855] md:mt-0 mt-10'>
                    <Dashboard></Dashboard>
                </div>

            </div>
            }
            </>

            {/* //view mode  */}
            <>
            {
                profileMode[0].profile_mode === 'view' &&
                <div className='flex items-start md:flex-row flex-col'>
                <div className='md:w-[30%]'>
                    <div className='flex md:block justify-center'>
                        <div onClick={() => changeProfileMode("edit")} className={`w-[300px] h-[300px] ${!profileimg && 'border-2'} border-dashed  overflow-hidden rounded-full  border-[#64CCC5]`}>
                            {
                                !photoURL ?
                                <PiSelectionPlusBold className='text-white text-[80px]'></PiSelectionPlusBold>
                                :
                                <img className='w-full h-full' src={photoURL} alt="" />
                            }
                        </div>
                    </div>

                    <div className='mt-10 px-5 text-center md:text-left'>
                        <h2 className='text-3xl text-gray-200 capitalize'>{name}</h2>
                        <p className='mt-2 text-lg text-gray-300'>{bio}</p>

                        <button onClick={() => changeProfileMode('edit')} className='text-md mt-5 py-2 rounded-md bg-[#182645] text-white w-full'>প্রফাইল এডিট করুন</button>

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
                profileMode[0].profile_mode === 'edit' &&
                <div className='flex items-start md:flex-row flex-col'>
                <div className='md:w-[30%]'>
                    <form onSubmit={editProfile}>
                    <div className='flex justify-center md:block'>
                        <div htmlFor="profile-pic" className={`w-[280px] h-[280px] ${!profileimg && 'border-2'} border-dashed  overflow-hidden rounded-full flex items-center justify-center border-[#64CCC5]`}>
                            {
                                !profileimg ?
                                <PiSelectionPlusBold className='text-white text-[80px]'></PiSelectionPlusBold>
                                :
                                <img className='w-full h-full' src={profileimg} alt="" />
                            }


                        </div>

                        {/* // profile images for user  */}
                        <div className='grid md:grid-cols-5 pl-5 mt-5'>
                            {
                                profilePicturs.map(pimg => 
                                <div className='w-[50px]' onClick={() => setProfileimg(pimg?.img)}>
                                    <img className='rounded-full cursor-pointer hover:opacity-50' src={pimg?.img} alt={pimg?.name} />
                                </div>)
                            }
                        </div>
                    </div>

                    <div className='mt-10 px-5'>
                        {/* for name  */}
                        <label htmlFor="name" className='text-sm text-white'>তোমার নাম লেখো বাবুয়া </label> <br />
                        <input required name='name' id='name' className='bg-transparent text-white mb-3 p-2 border-2 rounded-md w-full border-[#64CCC5]' type="text" placeholder='কমুনা আমার শরম করে' defaultValue={name} />
                        
                        {/* for bio  */}
                        <label htmlFor="bio" className='text-sm text-white'>নিজের সম্পর্কে কিছু লিখে যাও </label> <br />
                        <textarea defaultValue={bio} className='bg-transparent text-white mb-3 p-2 h-32 border-2 rounded-md w-full border-[#64CCC5]' name="bio" id="" placeholder='টাকায় ছিনিমিনি করতাছে...?'></textarea>

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
            
            {
                !name && 
            <h2 className='mt-10 text-lg text-left lg:pl-5 text-red-400 animate-pulse'>সামনে এগিয়ে যেতে এখনি প্রফাইলটি কমপ্লিট করুন। 🍹 </h2>
            }
        </div>
    );
};

export default Profile;