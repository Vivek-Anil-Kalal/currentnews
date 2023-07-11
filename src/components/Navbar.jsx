import React from 'react'
import { logo } from '../assets'
import { navItems } from '../constants'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState("");
    const navigate = useNavigate();
    return (
        <div className="w-full p-3 bg-[#242582] min-h-[50px] flex items-center">
            <div className="logo flex items-center w-full">
                <img src={logo} alt="logo" className="w-10" />
                <ul className="list-none w-full flex justify-center gap-6 text-white sm:font-bold font-semibold text-xl sm:text-2xl">
                    {
                        navItems.map((item, idx) => (
                            <li onClick={(e) => {
                                setIsActive(e.target.outerText)
                                navigate(`/${e.target.outerText.toLowerCase()}`)
                            }}
                                key={idx}
                                className={`${isActive === item ? "text-[#f27735ea]" : ""} cursor-pointer transition-all duration-500`}>{item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar