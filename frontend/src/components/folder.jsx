import { EditIcon, FolderEdit, FolderIcon, SaveIcon, Trash } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { foldersAction } from "../redux/folderList"
import { Loader } from "./loader"

export const Folder = ({ folderObj, delay }) => {
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(folderObj.draft ? true: false)
    const [folderName, setFolderName] = useState(folderObj.name ? folderObj.name : "")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const love = useSelector(state => state.folder)
    console.log("isEditing:",isEditing)
    console.log("folderlist: " ,love)

    const openFolder = () => {
        navigate(folderObj._id)
    }

    const saveFolderName = () => {
        if (folderName.trim() === "") {
            console.log("empty folder name");
            return;
        }
        setLoading("saving");
        const fetchData = async (bodyData) => {
            try {
                console.log(`Bearer ${localStorage.getItem('jwtToken')}`)
                const response = await fetch(import.meta.env.VITE_BASE_URL + "folders/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwtToken'))}`
                    },
                    body: JSON.stringify(bodyData)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();

                dispatch(foldersAction.addFolder(result))
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        };

        fetchData({ name: folderName });
    }

    const deleteFolder = () => {
        setLoading("deleting");
        const fetchData = async (bodyData) => {
            try {
                console.log(`Bearer ${localStorage.getItem('jwtToken')}`)
                const response = await fetch(import.meta.env.VITE_BASE_URL + "folders/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwtToken'))}`
                    },
                    body: JSON.stringify(bodyData)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                if(response){
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log(result)
                setIsEditing(false)
                // const indexOfDraftFolder = delay * 10;
                // dispatch(foldersAction.removeFolderbyInd(indexOfDraftFolder))
                // console.log(indexOfDraftFolder)
                // dispatch(foldersAction.addFolder(result))
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        };

        fetchData({ name: folderName });
    }


    return <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
      
        className="flex flex-col border active:scale-95 ease-linear duration-75 px-2 py-4 hover:border-stone-400 rounded-xl gap-2 min-w-44 sm:min-w-48 cursor-pointer w-fit ">
        <div className="flex w-full px-1 gap-4 items-center justify-between">
            <FolderIcon onClick={folderObj.name && openFolder} />
            <Trash onClick={() => deleteFolder()} className="text-midRedLight active:scale-95 ease-linear duration-100" />
        </div>
        {isEditing ?
            <div className="flex w-full px-1 gap-4 items-center justify-between">
                <input value={folderName} onChange={(e) => setFolderName(e.target.value)} className="w-fit bg-slate-100 border-stone-300 p-1 max-w-28 sm:max-w-32 rounded border" placeholder="folder name" />
                {loading !== "saving" ? <SaveIcon onClick={saveFolderName} className="active:scale-95 text-green-500 ease-linear duration-100" /> :
                    <Loader />
                }
            </div>
            :
            <div className="flex w-full px-1  gap-4 items-center justify-between">
                <p>{folderObj.name}</p>
                <EditIcon 
                onClick={() => setIsEditing(true)} className="active:scale-95  text-yellow-500 ease-linear duration-100" />
            </div>
        }
    </motion.div>
} 