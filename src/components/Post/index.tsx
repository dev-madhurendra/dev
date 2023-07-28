import Link from 'next/link'
import React from 'react'

export const Post = (ele : any) => {
  return (
    <Link href={`post/${ele.id}`} >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <span className="text-gray-700 text-base">
                Author - @{ele.username}
            </span>
            <img className="w-full" src={ele.imgUrl} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {ele.title} <br />
                    <span className="text-gray-700 text-base">
                        {ele.createdAt}
                    </span> <br />
                </div>
                
                <p className="text-gray-700 text-base">
                    {ele.description.length > 200 ? ele.description.substr(0, 200) + "..." : ele.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    </Link>
  )
}
