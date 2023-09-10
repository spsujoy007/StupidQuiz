import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blog, setBlog] = useState([
        {
            "id": "16eo2g4",
            "name": "t3_16eo2g4",
            "url": "https://reddit.com/r/ProgrammerHumor/comments/16eo2g4/soeasy/",
            "sourceUrl": "https://reddit.com/r/ProgrammerHumor",
            "thumbnail": "https://b.thumbs.redditmedia.com/NHpNCjaG7zFNI1pl4S_H7cEhkL_a_BbKy5ddJq40IEM.jpg",
            "media": "https://i.redd.it/wke82xez7cnb1.jpg",
            "upvotes": 4547,
            "title": "soEasy",
            "content": "",
            "content_html": null,
            "permalink": "/r/ProgrammerHumor/comments/16eo2g4/soeasy/",
            "source": "/r/ProgrammerHumor",
            "posted": "2023-09-10T02:16:14.000Z",
            "after": "t3_16eywug"
        },
        {
            "id": "16f1rqw",
            "name": "t3_16f1rqw",
            "url": "https://reddit.com/r/ProgrammerHumor/comments/16f1rqw/pleasedonotfireme/",
            "sourceUrl": "https://reddit.com/r/ProgrammerHumor",
            "thumbnail": "https://b.thumbs.redditmedia.com/coKvioelYXw1h6OuIstjcqSGGSkD7D0scA6zTewaR8k.jpg",
            "media": "https://i.redd.it/quhlf13ivfnb1.png",
            "upvotes": 1349,
            "title": "pleaseDoNotFireMe",
            "content": "",
            "content_html": null,
            "permalink": "/r/ProgrammerHumor/comments/16f1rqw/pleasedonotfireme/",
            "source": "/r/ProgrammerHumor",
            "posted": "2023-09-10T14:33:55.000Z",
            "after": "t3_16ezzcz"
        },
        {
            "id": "16ez5jp",
            "name": "t3_16ez5jp",
            "url": "https://reddit.com/r/ProgrammerHumor/comments/16ez5jp/todayisworldsuicidepreventionday/",
            "sourceUrl": "https://reddit.com/r/ProgrammerHumor",
            "thumbnail": "https://b.thumbs.redditmedia.com/z5lLr2EaX6NH5RmGAJCC8gWtdYrz9kCwETrkCMFgZKc.jpg",
            "media": "https://i.redd.it/9nxjxe9r9fnb1.jpg",
            "upvotes": 930,
            "title": "todayIsWorldSuicidePreventionDay",
            "content": "",
            "content_html": null,
            "permalink": "/r/ProgrammerHumor/comments/16ez5jp/todayisworldsuicidepreventionday/",
            "source": "/r/ProgrammerHumor",
            "posted": "2023-09-10T12:32:03.000Z",
            "after": "t3_16f1rqw"
        },
        {
            "id": "16eywug",
            "name": "t3_16eywug",
            "url": "https://reddit.com/r/ProgrammerHumor/comments/16eywug/document/",
            "sourceUrl": "https://reddit.com/r/ProgrammerHumor",
            "thumbnail": "https://b.thumbs.redditmedia.com/2K96_Zgrtmbrk5EYg3-7IQ0J6PGqLgBc7MjXnb5pc7c.jpg",
            "media": "https://i.redd.it/x2od2c257fnb1.png",
            "upvotes": 694,
            "title": "docUment",
            "content": "",
            "content_html": null,
            "permalink": "/r/ProgrammerHumor/comments/16eywug/document/",
            "source": "/r/ProgrammerHumor",
            "posted": "2023-09-10T12:20:13.000Z",
            "after": "t3_16ez5jp"
        },
        {
            "id": "16ezzcz",
            "name": "t3_16ezzcz",
            "url": "https://reddit.com/r/ProgrammerHumor/comments/16ezzcz/twolinesofcss/",
            "sourceUrl": "https://reddit.com/r/ProgrammerHumor",
            "thumbnail": "https://b.thumbs.redditmedia.com/_ypPLneQAIFqqxRro-wL11cLk3xZi6STptXvWAJVc4A.jpg",
            "media": "https://i.redd.it/tk5qfhs1hfnb1.jpg",
            "upvotes": 467,
            "title": "twoLinesOfCSS",
            "content": "",
            "content_html": null,
            "permalink": "/r/ProgrammerHumor/comments/16ezzcz/twolinesofcss/",
            "source": "/r/ProgrammerHumor",
            "posted": "2023-09-10T13:12:39.000Z",
            "after": "t3_16eo2g4"
        }
    ])
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        const fetchData = async() => {
            const url = 'https://programmer-humor.p.rapidapi.com/api/reddit';
            const options = {
            	method: 'GET',
            	headers: {
            		'X-RapidAPI-Key': 'da5dc19f26msh29cc2b4c175cfe3p1b0df7jsn3b2fbfc0cdbe',
            		'X-RapidAPI-Host': 'programmer-humor.p.rapidapi.com'
            	}
            };

            try {
            	const response = await fetch(url, options);
            	const result = await response.text();
                const data = JSON.parse(result);
                console.log(data)
                setBlogs(data)
            } catch (error) {
            	console.error(error);
            }
        }
        fetchData()
    }, [])


    return (
        <div className='md:max-w-[1240px] mx-auto mt-5'>
            <div className='pl-5'>

                {/* first blog  */}
                <div className='bg-[#f1f1f1] p-5'>
                <p className='text-xl font-bold mb-2 text-black'>Programming blogs:</p>
                <div className='grid grid-cols-2 gap-y-10 gap-x-2 justify-center '>
                {
                    blog.map(blog => 
                    <div  className='border-2 p-2 rounded-md ' key={blog?.id}>
                        <div className='flex gap-2'>
                            <img className='w-[150px]' src={blog.media} alt="" />
                            <div>
                                <h4 className='whitespace-pre-wrap text-[20px] text-black'>{blog?.title}</h4>
                                <h2 className='text-gray-500'>name: <span className='font-bold text-gray-700'>{blog.name}</span></h2>
                                    
                                <a href={blog.sourceUrl}><button className='bg-[#64CCC5] text-white px-5 py-1 rounded-sm'>Resource</button></a>
                            </div>
                        </div>
                    </div>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;