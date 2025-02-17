import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { motion, AnimatePresence, time } from "framer-motion"
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import StarsIcon from '@mui/icons-material/Stars';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { notesListAction } from "../redux/notesList";
import { foldersAction } from "../redux/folderList";
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-black shadow-lg w-full fixed top-0 z-50">
      <div className="w-full mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
        <svg width="70" height="65" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <rect width="200" height="200" rx="20" />
  <text x="50" y="110" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#38BDF8">N</text>
  <text x="110" y="110" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#a6a6a6">M</text>
  <rect x="60" y="130" width="80" height="40" rx="10" fill="#FACC15"/>
  <line x1="70" y1="140" x2="130" y2="140" stroke="#1E293B" stroke-width="4"/>
  <line x1="70" y1="150" x2="130" y2="150" stroke="#1E293B" stroke-width="4"/>
  <line x1="70" y1="160" x2="110" y2="160" stroke="#1E293B" stroke-width="4"/>
</svg>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {["Features", "About", "FAQ"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>


          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Login
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white dark:bg-gray-900 transition-transform ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          {["Features", "About", "FAQ"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700 dark:text-gray-300" />
            )}
            <span className="text-gray-700 dark:text-gray-300">Toggle Theme</span>
          </button>


          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


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
      <div className="fixed top-0 z-40 py-2 justify-between flex pr-10 left-0 pl-16 sm:pl-36 w-screen h-14 items-center bg-white">
        <div className="bg-transparent border-2 items-center rounded-3xl flex gap-2 justify-between w-fit h-fit">
          <input placeholder="search here" className="bg-transparent focus:outline-none rounded-3xl px-10 py-1" ></input>
          <div className="hover:bg-slate-100 active:scale-90 ease-linear duration-75 p-2 cursor-pointer rounded-full">
            <SearchIcon />
          </div>
        </div>
        <div className="bg-transparent border-2 items-center rounded-3xl flex gap-2 justify-between w-fit h-fit">
          <div className="hover:bg-slate-100 active:scale-90 ease-linear duration-75 p-2 cursor-pointer rounded-full">
            <StarsIcon />
          </div>
          <div className="hover:bg-slate-100 active:scale-90 ease-linear duration-75 p-2 cursor-pointer rounded-full">
            <SettingsIcon />
          </div>
        </div>

      </div>
      <div className="fixed h-screen w-12 sm:w-28 z-50 flex flex-col justify-start gap-2 items-center left-0 top-0 bg-white border-r-stone-200 border">
        <div className="flex gap-2 justify-start h-fit items-center p-3 pt-4 pb-10">
          <Link to="/">
            <SchoolIcon size="large" />
          </Link>
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

  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        console.log("Window width is less than 640px");
        setTop("7rem")
        setLeft("5rem")
      }
      else {
        setTop("7rem")
        setLeft("9rem")
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let colorType;
  switch (color) {
    case "bg-midYellowLight":
      colorType = 1;
      break;
    case "bg-midRedLight":
      colorType = 2;
      break;
    case "bg-midPurpleLight":
      colorType = 3;
      break;
    case "bg-midBlueLight":
      colorType = 4;
      break;
    case "bg-midGreenLight":
      colorType = 5;
      break;
  }

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
      dispatch(notesListAction.addNote({ draft: true, colorType: colorType }))
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
      animate={{ opacity: 1, top, left, width: dimension.width, height: dimension.height, borderRadius: "24px" }}
      exit={{ opacity: 0 }}
      transition={{type:"spring"}}
      onClick={handleClick}
      className={`rounded-full fixed cursor-pointer active:scale-75 ease-linear duration-75  border border-${borderColor} aspect-square ${color}`}>
    </motion.div>}
  </div>
}

export const ProfileNavbar2 = ({ setKeepTheLatestNotesHidden }) => {
  const [addIconColor, setAddIconColor] = useState("")
  const [colorShowing, setColorShowing] = useState(false)
  const [icon, setIcon] = useState(<AddCircleIcon sx={{ color: `${addIconColor}` }} fontSize="large" />)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!colorShowing) return;
    const timeout = setTimeout(() => {
      setIcon(
        <motion.div
          animate={{ rotate: 0, scale: 1 }}
          initial={{ rotate: 180, scale: 1.2 }}

        >
          <AddCircleIcon sx={{ color: `${addIconColor}` }} fontSize="large" />
        </motion.div>
      )
      setColorShowing(prev => !prev)
    }, 500);

    return () => clearTimeout(timeout)
  }, [icon])

  const handleClick = () => {

    dispatch(foldersAction.addFolder({ draft: true, _id: uuidv4()}))
    console.log("dispatching draft folder")

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
      <div className="fixed top-0 z-40 py-2 justify-between flex pr-10 left-0 pl-16 sm:pl-36 w-screen h-14 items-center bg-white">
        <div className="bg-transparent border-2 items-center rounded-3xl flex gap-2 justify-between w-fit h-fit">
          <input placeholder="search here" className="bg-transparent focus:outline-none rounded-3xl px-10 py-1" ></input>
          <div className="hover:bg-slate-100 active:scale-90 ease-linear duration-75 p-2 cursor-pointer rounded-full">
            <SearchIcon />
          </div>
        </div>
        <div className="bg-transparent border-2 items-center rounded-3xl flex gap-2 justify-between w-fit h-fit">
          <div className="hover:bg-slate-100 active:scale-90 ease-linear duration-75 p-2 cursor-pointer rounded-full">
            <StarsIcon />
          </div>
          <div className="hover:bg-slate-100 active:scale-90 ease-linear duration-75 p-2 cursor-pointer rounded-full">
            <SettingsIcon />
          </div>
        </div>

      </div>
      <div className="fixed h-screen w-12 sm:w-28 z-50 flex flex-col justify-start gap-2 items-center left-0 top-0 bg-white border-r-stone-200 border">
        <div className="flex gap-2 justify-start h-fit items-center p-3 pt-4 pb-10">
          <Link to="/">
            <SchoolIcon size="large" />
          </Link>
        </div>
        <motion.div
          onClick={handleClick}
          className="cursor-pointer active:scale-90 ease-linear duration-75"
        >
          {icon}
        </motion.div>
        <br />

      </div>
    </>
  )
}