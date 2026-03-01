import React, { useEffect, useRef, useState } from 'react';
import { MdLightbulb, MdLightbulbOutline, MdNightsStay, MdOutlineLightMode } from 'react-icons/md';
import { useAppContext } from '../context';

const Header = () => {
    const {darkMode, toggleDarkMode, operator, toggleOperator} = useAppContext()
    const [scrolled, setScrolled] = useState(false)
    const paragraphRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            {/* fixed header */}
            <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${darkMode ? "bg-white" : "bg-black"}`}>
                <div className="w-[50vw]">
                    <div className="space-y-8 pt-6">
                        <div className="flex justify-between items-center">
                            <h1 className={`font-bold text-xl ${darkMode ? "text-black" : "text-white"}`}>you love lamp</h1>
                            <nav className={`flex items-center gap-x-2 ${darkMode ? "text-black/60" : "text-white/60"}`}>
                                <a href="">follow</a>
                                <a href="">course</a>
                            </nav>
                        </div>

                        <div className={`flex items-center justify-between pb-6 border-b-[1.2px] pt-10 ${darkMode ? "border-black" : "border-white"}`}>
                            <div className="flex items-center gap-1.5">
                                <MdLightbulbOutline className={`${darkMode ? "text-black" : "text-white"}`} />
                                <div onClick={toggleOperator} className={`w-12 h-5 border-[1.2px] rounded-3xl flex cursor-pointer items-center px-0.5 ${operator ? "justify-end" : "justify-start"} ${darkMode ? "border-black" : "border-white"}`}>
                                    <div className={`w-5 h-3 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}></div>
                                </div>
                                <MdLightbulb className={`${darkMode ? "text-black" : "text-white"}`} />
                            </div>

                            <div className="flex items-center gap-1.5">
                                <MdNightsStay className={`${darkMode ? "text-black" : "text-white"}`} />
                                <div onClick={toggleDarkMode} className={`w-12 h-5 border-[1.2px] hover:cursor-pointer rounded-3xl flex items-center px-0.5 ${darkMode ? "justify-end border-black" : "justify-start border-white"}`}>
                                    <div className={`w-5 h-3 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}></div>
                                </div>
                                <MdOutlineLightMode className={`${darkMode ? "text-black" : "text-white"}`} />
                            </div>
                        </div>

                        {/* paragraph - tkhaba mnin tscroll */}
                        <div className={`overflow-hidden transition-all duration-500 ${scrolled ? "max-h-0 opacity-0 pb-0" : "max-h-20 opacity-100 pb-6"}`}>
                            <p ref={paragraphRef} className={`${darkMode ? "text-black" : "text-white"}`}>
                                lamps for all occasions and every day use.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;