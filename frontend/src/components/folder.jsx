import { EditIcon, FolderIcon, SaveIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
export const Folder = ({ folderObj, delay }) => {
    const [isEditing, setIsEditing] = useState(folderObj.draft)
    const openFolder = () => {

    }

    const  saveFolderName = () => {
            
    }

    return <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        onClick={openFolder}
        className="flex flex-col border active:scale-95 ease-linear duration-75 px-2 py-4 hover:border-stone-400 rounded-xl max-w-60 min-w-32 gap-2 cursor-pointer">
        <FolderIcon />
        {isEditing ?
            <div className="flex w-full px-1 justify-between">
                <input className="w-fit bg-slate-100 border-stone-300 p-1 rounded border" placeholder="folder name" />
                <SaveIcon onClick={saveFolderName} className="active:scale-95 text-green-500 ease-linear duration-100" />
            </div>
            :
            <div className="flex w-full px-1 justify-between">
                <p>{folderObj.name}</p>
                <EditIcon onClick={() => setIsEditing(true)} className="active:scale-95 text-yellow-500 ease-linear duration-100" />
            </div>
        }
    </motion.div>
} 