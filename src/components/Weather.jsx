import React, { useState } from 'react'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'
import { Tempreture, location } from '../assets'

const Weather = () => {
  // States
  const [isLoaded, setIsLoaded] = useState(true);
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': 'd977e9f3efmshe4defaf8182a4b0p142fc9jsn768a939ce188',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const handleRefresh = () => {
    setData(null);
    setIsLoaded(true);
  };

  const callApi = async () => {
    try {
      setIsLoaded(false)
      const response = await axios.request(options);
      setData(response.data);
      setIsLoaded(true);

    } catch (error) {
      console.error(error);
    }
  }

    return (
        <div className="w-full p-4 flex items-center justify-center ">
            <div className="sm:min-w-[600px] sm:max-w-[800px] min-w-[300px] max-w-[500px] rounded-lg h-max border-2 border-black">
                {/* Title */}
                <div className="w-full border-b-2 border-black flex justify-center rounded-b-lg">
                    <h1 className="font-bold text-3xl">Weather</h1>
                </div>

                {
                    data ?
                        <div className="w-full p-4">
                            {/* Title */}
                            <div className="flex border-2 border-black rounded-lg">
                                <h1 className="font-semibold text-2xl flex gap-2 p-3 items-center"><span><img src={location} alt="location" className="w-[40px]" /></span> {data.location.name} , {data.location.region} , {data.location.country}</h1>
                            </div>

                            {/* Conditions */}
                            <div className="flex border-2 border-black rounded-lg mt-3">
                                <h1 className="font-semibold text-2xl flex gap-2 p-3 items-center"><span><img src={data.current.condition.icon} alt="location" className="w-[40px]" /></span> {data.current.condition.text}</h1>
                            </div>

                            {/* Conditions */}
                            <div className="flex sm:pl-3 pl-2 border-2 border-black rounded-lg mt-3">
                                <div className="flex items-center justify-between sm:gap-3 gap-2 w-full">
                                    <div className="">
                                        <h3 className="font-semibold sm:text-2xl text-lg">Wind Speed : {data.current.wind_kph}</h3>
                                        <h3 className="font-semibold sm:text-2xl text-lg">Wind Direction : {data.current.wind_dir}</h3>
                                    </div>
                                    <div className="border-r-2 border-r-black h-[120px]" />
                                    <iframe src={`https://giphy.com/embed/l2JJtwLTg3AppUgmY`} className="w-[100px] sm:mr-8 mr-2"></iframe>
                                </div>
                            </div>

                            {/* Tempreture */}
                            <div className="flex pl-3 border-2 border-black rounded-lg mt-3">
                                <div className="flex items-center gap-3 flex-auto">
                                    <img src={Tempreture} alt="temp" className="w-[40px]" />
                                    <h3 className="font-semibold text-2xl">Tempreture : {data.current.temp_c} &#8451;</h3>
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center mt-4">
                                <button onClick={handleRefresh} className="w-[200px] bg-blue-600 p-2 text-white font-bold rounded-xl hover:scale-110 duration-500">Try another</button>
                            </div>
                        </div>
                        : <div>
                            {/* Content */}
                            <div className="desc flex justify-center mt-5">
                                <h4 className="font-semibold text-xl">Know what's the weather</h4>
                            </div>

                            {/* Search */}
                            <div className='w-full flex justify-center items-center my-5'>
                                <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Search Your City" className="p-2 text-blue-700 font-semibold border-2 w-2/3 border-black rounded-lg focus:drop-shadow-lg duration-500" />
                            </div>

                            {
                                isLoaded ?
                                    < div className="w-full flex justify-center items-center mb-4">
                                        <button onClick={callApi} className='w-[200px] bg-blue-600 p-2 text-white font-bold rounded-xl hover:scale-110 duration-500'>Go</button>
                                    </div>
                                    :
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
    
                            }

                        </div>

                }

                <div className="flex w-full justify-center items-center">
                    <h1 className="flex font-bold text-xl">Made by Vivek Kalal.</h1>
                </div>

            </div>
        </div >

    )
}

export default Weather