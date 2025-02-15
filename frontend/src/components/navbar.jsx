import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AnimatePresence, motion } from "framer-motion"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { notesListAction } from "../redux/notesList";

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
export const ProfileNavbar = ({ setKeepTheLatestNotesHidden }) => {
    const [addIconColor, setAddIconColor] = useState("")
    const [colorShowing, setColorShowing] = useState(false)
    const [icon, setIcon] = useState(<AddCircleIcon sx={{ color: `${addIconColor}` }} fontSize="large" />)

    const handleClick = () => {
        setAddIconColor(() => {
            if (!colorShowing)
                return "";
            else return "rgb(58, 56, 56)"
        })
        setColorShowing(prev => !prev)
        setIcon(() => {
            if (colorShowing) return <motion.div
                animate={{ rotate: 0, scale: 1 }}
                initial={{ rotate: 180, scale: 1.2 }}
            >
                <AddCircleIcon sx={{ color: `${addIconColor}` }} fontSize="large" />
            </motion.div>
            else return (<motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 180, scale: 1.2 }}
            ><RemoveCircleIcon sx={{ color: `${addIconColor}` }} fontSize="large" />
            </motion.div>)
        })
    }
    return (
        <>
            <div className="fixed top-0 z-40 py-2 left-0 pl-36 w-screen h-14 items-center bg-white">
                <div className="bg-transparent border-2 items-center rounded-3xl flex gap-2 justify-between w-fit h-fit">
                    <input placeholder="search here" className="bg-transparent focus:outline-none rounded-3xl px-10 py-1" ></input>
                    <div className="hover:bg-slate-100 active:scale-90 ease-linear duration-75 p-2 cursor-pointer rounded-full">
                        <SearchIcon />
                    </div>
                </div>

            </div>
            <div className="fixed h-screen w-28 z-50 flex flex-col justify-start gap-2 items-center left-0 top-0 bg-white border-r-stone-200 border">
                <div className="flex gap-2 justify-start h-fit items-center p-3 pt-4 pb-10">
                    <p className="">Choco</p>
                    <SchoolIcon />
                </div>

                <motion.div
                    onClick={handleClick}
                    className="cursor-pointer active:scale-90 ease-linear duration-75"
                >
                    {icon}
                </motion.div>
                <br />
                <AnimatePresence>
                    {colorShowing && <motion.div className="flex flex-col gap-4">
                        {[
                            {
                                color: "bg-midYellowLight", 
                                borderColor: "bg-midYellowDark"
                            },
                            {
                                color: "bg-midRedLight",
                                borderColor: "bg-midRedDark"
                            },
                            {
                                color: "bg-midPurpleLight",
                                borderColor: "bg-midPurpleDark"
                            },
                            {
                                color: "bg-midBlueLight",
                                borderColor: "bg-midBlueDark"
                            },
                            {
                                color: "bg-midGreenLight",
                                borderColor: "bg-midGreenDark"
                            },

                        ].map((val, i) => <Bulletcolor setKeepTheLatestNotesHidden={setKeepTheLatestNotesHidden} key={i} color={val.color} borderColor={val.borderColor} delay={i / 10} />)}
                    </motion.div>}
                </AnimatePresence>
            </div>
        </>
    )
}


const Bulletcolor = ({ color, borderColor, delay, setKeepTheLatestNotesHidden }) => {
    const dispatch = useDispatch()
    const [startAnimate, setStartAnimate] = useState(false)
    const [dimension, setDimension] = useState(
        {
            width: "1rem", height: "1rem"
        }
    )

    useEffect(() => {
        if (!startAnimate) return;
        const timeout = setTimeout(() => {
            setStartAnimate(false)
        }, 1000);

        return () => clearTimeout(timeout)

    }, [startAnimate])


    const handleClick = () => {
        const noteBox = document.querySelector('.noteBox');
        let w, h;
        if (noteBox) {
            const { width, height } = noteBox.getBoundingClientRect();
            w = width, h = height;
        }
        setTimeout(() => {
            dispatch(notesListAction.addNote({ text: "i will learn complete devops.", createdDate: "21 March, 2023", colorType: 2 }))
        }, 10);
        setStartAnimate(true)
        setKeepTheLatestNotesHidden(true)
        setDimension({ width: w, height: h })
    }

    return <div className="relative">
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ delay, type: "spring" }}
            onClick={handleClick}
            className={`rounded-full cursor-pointer active:scale-75 ease-linear duration-75 w-4 border border-${borderColor} aspect-square ${color}`}>
        </motion.div>
        {startAnimate && <motion.div
            initial={{ opacity: 0, top: "13rem", left: "2rem", width: "1rem", height: "1rem" }}
            animate={{ opacity: 1, top: "5rem", left: "9rem", width: dimension.width, height: dimension.height, borderRadius: "0.5rem" }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
            className={`rounded-full fixed cursor-pointer active:scale-75 ease-linear duration-75  border border-${borderColor} aspect-square ${color}`}>
        </motion.div>}
    </div>
}

