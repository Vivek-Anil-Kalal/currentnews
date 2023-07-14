import React, { useState } from 'react'
import { news } from '../assets'


const NewsCard = ({ item, key }) => {

  const truncatedText = item.description?.length > 20 ? item.description.slice(0, 150) : '';

  return (

    <div className="w-full p-2 border-2 border-slate-500 rounded-lg h-full relative">
      {/* Article Image */}
      <div className="w-full">
        {/* add urlToImage here */}
        <img src={item.urlToImage ? item.urlToImage : news} alt="articlePic" className="w-full object-contain rounded-lg" />
      </div>

      {/* About Article */}

      <div className="w-full p-2">
        {/* title */}
        <h4 className="font-bold border-b-2 border-opacity-50 border-blue-900 py-1">{item.title}</h4>
        <p className="border-b-2 min-h-[100px] border-blue-900 border-opacity-50 py-1 truncate-3">{truncatedText}<a href={item.url} className="text-blue-500">... Read More</a> </p>
        <div className="flex justify-between items-center border-b-2 gap-4 border-blue-900 border-opacity-50">
          <h5 className="my-1 mx-1">Author : {item.author ? item.author : "Unknown"}</h5>
          <div className="h-[40px] border-2 border-black" />
          <p className="flex justify-center items-center">{item.publishedAt}</p>
        </div>

        {/* Read More */}
        <div className="flex justify-center min-h-[40px]">
          <div className="absolute bottom-3">
            <a href={item.url} className="p-2 min-w-[50px] bg-blue-700 mt-2 rounded-md text-white">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard