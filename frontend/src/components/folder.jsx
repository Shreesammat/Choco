import { EditIcon, FolderEdit, FolderIcon, SaveIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export const Folder = ({ folderObj, delay }) => {
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(folderObj.draft)
    const[folderName, setFolderName] = useState(folderObj.name ? folderObj.name : "")
    const [loading ,setLoading] = useState(false)
    const dispatch = useDispatch()
  
    const openFolder = () => {
        navigate(folderObj.name)
    }

    const  saveFolderName = () => {
        setLoading(false);
        const fetchData = async (bodyData) => {
            try {
                const response = await fetch(import.meta.env.VITE_BASE_URL+"folders/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                         Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(bodyData)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log(result)
                console.log("succesfuly updated name")
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchData({name: folderName});
    }   

    return <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}

        className="flex flex-col border active:scale-95 ease-linear duration-75 px-2 py-4 hover:border-stone-400 rounded-xl gap-2 min-w-44 sm:min-w-48 cursor-pointer w-fit ">
        <FolderIcon onClick={folderObj.name && openFolder} />
        {isEditing ?
            <div className="flex w-full px-1 gap-4 items-center justify-between">
                <input value={folderName} onChange={(e) => setFolderName(e.target.value)} className="w-fit bg-slate-100 border-stone-300 p-1 max-w-28 sm:max-w-32 rounded border" placeholder="folder name" />
                <SaveIcon onClick={saveFolderName} className="active:scale-95 text-green-500 ease-linear duration-100" />
            </div>
            :
            <div className="flex w-full px-1  gap-4 items-center justify-between">
                <p>{folderObj.name}</p>
                <EditIcon onClick={() => setIsEditing(true)} className="active:scale-95  text-yellow-500 ease-linear duration-100" />
            </div>
        }
    </motion.div>
} 