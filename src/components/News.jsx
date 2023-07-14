import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner'
import { down, searchImg, up } from '../assets'
import { countries } from '../constants'
import { NewsCard } from './index';
import { articlesData } from '../data'
import { logDOM } from '@testing-library/react';

const News = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('all');
  const [query, setQuery] = useState('all');


  // we can get two api one for all news and whichever user search for and another for top headlines which will be shown on the front page 
  const options = {
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?apiKey=86dfef5dbbb84306b039c928ba8c7c47${countryCode !== 'all' ? `&country=${countryCode}` : ''}${countryCode === 'all' ? `&q=${query}` : ''}`,
    params: {
    },
    headers: {
      'X-API-Key': '86dfef5dbbb84306b039c928ba8c7c47',
    }
  };
  const searchOptions = {
    method: 'GET',
    url: `https://newsapi.org/v2/everything?apiKey=86dfef5dbbb84306b039c928ba8c7c47&q=${query}`,
    params: {
    },
    headers: {
      'X-API-Key': '86dfef5dbbb84306b039c928ba8c7c47',
    }
  };

  const getAllNews = async () => {
    try {
      console.log("5 " + countryCode);
      setIsLoaded(false)
      const response = await axios.request(options);
      console.log("6");
      const articles = response.data.articles;
      console.log("7");
      setData(articles);
      setIsLoaded(true)
    } catch (error) {
      console.error(error);
    }
  }

  const getNews = async () => {
    try {
      setIsLoaded(false)
      const response = await axios.request(searchOptions);
      const articles = response.data.articles;
      setData(articles);
      setIsLoaded(true)
    } catch (error) {
      console.error(error);
    }
  }

  // first time page render then to show news
  useEffect(() => {
    console.log("4");
    getAllNews()
    console.log("8");
  }, [countryCode])

  return (
    <div className="w-full p-3">
      {
        !isLoaded ?
          <div className="flex justify-center items-center">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#242582"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
          :
          <div>
            {/* Search Section */}
            <div className="w-full p-2 flex flex-wrap justify-center items-center border-b-2 border-black border-opacity-50 gap-4">
              <div className="md:min-w-[500px] min-w-[300px] relative">
                <input type="text" placeholder="Search For News" className="w-full border-2 border-blue-800 p-2 rounded-2xl outline-none focus:drop-shadow-lg duration-300 font-semibold text-blue-700" />
                <img src={searchImg} alt="searchImg" className="absolute right-4 top-1 w-[35px]" />
              </div>

              <div className="relative">
                {/* Chips DropDown */}
                <button className="min-w-[200px] bg-gray-300 p-2 rounded-lg flex justify-between items-center"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <h1 className='font-bold pl-2'>{country ? country : 'Chose Country'}</h1>
                  {
                    isOpen ? <img src={up} alt="up" className="w-[20px]" /> : <img src={down} alt="down" className="w-[20px]" />
                  }
                </button>
                {/* DropDown */}
                {
                  isOpen ?
                    <div className="bg-gray-300 w-full absolute top-[45px] left-[2px] rounded-lg p-2 duration-500 z-20">
                      {
                        countries.map((country, i) => {
                          const [code, name] = Object.entries(country)[0];
 
                          return (
                            <div className="p-2 font-semibold cursor-pointer border-l-4 border-transparent hover:border-l-blue-600 hover:bg-blue-200 border-4 rounded-r-lg"
                              onClick={(text) => {
                                console.log("1");
                                const updatedCode = code ;
                                console.log("2 " + updatedCode);
                                setCountryCode(updatedCode)
                                console.log("3");
                                setCountry(text.target.innerHTML) 
                                setIsOpen(false);
                              }}
                              key={i}>{name}
                            </div>
                          )
                        }
                        )
                      }
                    </div>
                    :
                    null
                }
              </div>
            </div>

            {/* News API Calling */}
            <div className="w-full bg-slate-100 flex flex-wrap gap-3 justify-center p-3">
              {
                data?.map((item, i) => (
                  <div className="md:min-w-[250px] min-w-[350px] md:max-w-[350px]">
                    <NewsCard item={item} key={i} />
                  </div>
                ))
              }
            </div>
          </div>

      }
    </div>
  )
}

export default News