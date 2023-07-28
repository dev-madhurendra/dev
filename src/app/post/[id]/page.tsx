'use client'
import React, { useEffect, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { usePathname, useRouter } from 'next/navigation';
import { blogs } from '@/mocks/blogs';
import Footer from '@/components/Footer';
const PostId = () => {

  const pathname = usePathname()
  const id = +pathname[pathname.length - 1]
  
  const [post,setPosts] = useState(blogs[id - 1])
   
  
  return (
    <>
      <div className='p-5'>
        <div>
          <div>
            <div>
              <h1 className="text-center font-bold text-2xl">{post.title} <ModeEditIcon sx={{cursor:"pointer"}} />  <DeleteIcon  sx={{color : "red",cursor:"pointer"}} /> </h1>
              <p className="text-center text-gray-700 text-base">
                @{post.username} <span>{post.createdAt}</span>
              </p>
            </div>
            <div>
              <img className="rounded w-11/12 m-auto" src={post.imgUrl} alt="Sunset in the mountains" />
            </div>
          </div>
          <div className='first-letter:text-4xl first-letter:font-bold w-11/12 m-auto text-justify text-2xl'>
              {post.description}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PostId
