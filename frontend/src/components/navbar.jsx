import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item </a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Choco</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About us</a></li>
                    <li><a>Contact us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    )
}
export const ProfileNavbar = () => {
    const [addIconColor, setAddIconColor] = useState("")
    const [colorShowing, setColorShowing] = useState(false)
    const handleClick = () => {
        setColorShowing(prev => !prev)
    }
    return (
        <>
            <div className="fixed top-0 z-40 left-0 w-screen h-14 items-center bg-white">
            </div>
            <div className="fixed h-screen w-28 z-50 flex flex-col justify-start gap-2 items-center left-0 top-0 bg-white border-r-stone-200 border">
                <div className="flex gap-2 justify-start h-fit items-center p-3 pt-4 pb-10">
                    <p className="">Choco</p>
                    <SchoolIcon />
                </div>
                <motion.div
                    onClick={handleClick}
                    onMouseEnter={() => setAddIconColor("rgb(58, 56, 56) ")}
                    onMouseLeave={() => setAddIconColor("")}
                    className="cursor-pointer active:scale-90 ease-linear duration-75"

                >
                    <AddCircleIcon sx={{ color: `${addIconColor}` }} fontSize="large" />
                </motion.div>
                <br />
                <AnimatePresence>
                    {colorShowing && <motion.div className="flex flex-col gap-4">
                        {[
                            {
                                color: "bg-blue-400",
                                borderColor: "bg-blue-600"
                            },
                            {
                                color: "bg-red-400",
                                borderColor: "bg-red-600"
                            },
                            {
                                color: "bg-purple-400",
                                borderColor: "bg-purplel-600"
                            },
                            {
                                color: "bg-green-400",
                                borderColor: "bg-green-600"
                            },

                        ].map((val, i) => <Bulletcolor key={i} color={val.color} borderColor={val.borderColor} delay={i/10} />)}
                    </motion.div>}
                </AnimatePresence>
            </div>
        </>
    )
}


const Bulletcolor = ({ color, borderColor, delay }) => {
    return <motion.div
        initial={{y: -40, opacity: 0}}
        animate={{y: 0, opacity:1}}
        exit={{y: -40, opacity: 0}}
        transition={{delay, type: "spring"}}
        className={`rounded-full w-4 border border-${borderColor} aspect-square ${color}`}>
    </motion.div>
}

