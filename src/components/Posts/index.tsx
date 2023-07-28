import React from 'react'
import { Post } from '../Post'
import { blogs } from '@/mocks/blogs'

const Posts = () => {
    return (
        <div className="grid grid-cols-3 gap-4 place-items-center mt-10 sx:grid-cols-1">
            {
                blogs.map(blog => <Post key={blog.id} {...blog} />)
            }
        </div>
    )
}

export default Posts