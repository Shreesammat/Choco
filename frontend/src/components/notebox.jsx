import { motion } from "framer-motion";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { Pencil } from "lucide-react";
export const NoteBox = ({ noteObj, delay, keepTheLatestNotesHidden }) => {
    let lightColor, darkColor;
    switch (noteObj.colorType) {
        case 1:
            lightColor = "bg-midYellowLight";
            darkColor = "bg-midYellowDark";
            break;
        case 2:
            lightColor = "bg-midRedLight";
            darkColor = "bg-midRedDark";
            break;
        case 3:
            lightColor = "bg-midPurpleLight";
            darkColor = "bg-midPurpleDark";
            break;
        case 4:
            lightColor = "bg-midBlueLight";
            darkColor = "bg-midBlueDark";
            break;
        case 5:
            lightColor = "bg-midGreenLight";
            darkColor = "bg-midGreenDark";
    }

    const [isEditing, setIsEditing] = useState(false)
    console.log(darkColor.slice(3))
    const borderColor = darkColor.slice(3);

    return (<motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay, type: "spring" }}
        className={`sm:max-w-80 max-w-[350px] w-full flex flex-col p-5 h-full min-h-52 max-h-72 ${lightColor} ${keepTheLatestNotesHidden && delay === 0 && 'invisible'} rounded-3xl noteBox`}>
        <div className="h-[90%]" >
            {isEditing ?
                <div className="flex flex-col h-full gap-3" >
                    {keepTheLatestNotesHidden && delay === 0 ?
                        <input
                        className={`bg-transparent border focus:outline-none rounded px-2 py-1`} />
                        :
                        <motion.input
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={`bg-transparent border border-${borderColor} focus:outline-none rounded px-2 py-1`} />

                    }
                   
                    {keepTheLatestNotesHidden && delay === 0 ?
                        <textarea
                        className={`bg-transparent border focus:outline-none rounded px-2 py-1`}  />
                        :
                        <motion.textarea
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={`bg-transparent border min-h-32 border-${borderColor} focus:outline-none rounded px-2 py-1`}  />

                    }

                </div>
                :
                <>
                    {keepTheLatestNotesHidden && delay === 0 ?
                        <p className="text-stone-800 text-lg">{noteObj.title}</p>
                        :
                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-stone-900 text-xl font-medium">{noteObj.title}</motion.p>

                    }
                    <br />
                    {keepTheLatestNotesHidden && delay === 0 ?
                        <p className="text-stone-800 text-lg">{noteObj.content}</p>
                        :
                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-stone-900 text-xl ">{noteObj.content}</motion.p>

                    }
                </>

            }
        </div>

        <div className="flex justify-between items-center">
            
            {keepTheLatestNotesHidden && delay === 0 ?
                <p className="text-stone-800 text-lg ">{noteObj.createdDate}</p>
                :
                <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-stone-800 text-lg text-opacity-75">{noteObj.createdDate}k</motion.p>
            }
            <div
                onClick={() => setIsEditing(true)}
                className={`ease-linear duration-75 active:scale-90 p-1 rounded-xl cursor-pointer bg-opacity-50`}>
                <Pencil className={`text-${borderColor}`} />
            </div>
        </div>
    </motion.div>)
}