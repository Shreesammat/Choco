import { motion } from "framer-motion";
import EditIcon from '@mui/icons-material/Edit';
export const NoteBox = ({ noteObj, delay, keepTheLatestNotesHidden }) => {
    let color;
    switch (noteObj.colorType) {
        case 1:
            color = "bg-yellow-400";
            break;
        case 2:
            color = "bg-red-400";
            break;
        case 3:
            color = "bg-purple-400";
            break;
        case 4:
            color = "bg-blue-400";
            break;
        case 5:
            color = "bg-green-400";
    }

    return (<motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay, type: "spring" }}
        className={`sm:max-w-80 max-w-[350px] w-full flex flex-col p-5 h-full min-h-52 ${color} ${keepTheLatestNotesHidden && delay === 0 && 'invisible'} rounded-lg noteBox`}>
        <div className="h-[90%]" >
            {keepTheLatestNotesHidden && delay === 0 ?
                <p className="text-stone-800 text-lg">{noteObj.text}</p>
                :
                <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-stone-900 text-xl">{noteObj.text}</motion.p>

            }
        </div>

        <div className="flex justify-between items-center">
            {keepTheLatestNotesHidden && delay === 0 ?
                <p className="text-stone-800 text-lg ">{noteObj.createdDate}</p>
                :
                <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-stone-800 text-lg opacity-50">{noteObj.createdDate}k</motion.p>

            }
            <div className="ease-linear duration-75 active:scale-90 p-1 rounded cursor-pointer bg-slate-100 bg-opacity-50">
                <EditIcon sx={{ color: "black" }} />
            </div>
        </div>
    </motion.div>)
}