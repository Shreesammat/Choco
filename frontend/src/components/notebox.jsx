import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BadgePlus, EditIcon, Link, Pencil, Save, SaveIcon, Trash } from "lucide-react";
import {Modal} from "./modal";
export const NoteBox = ({ noteObj, delay, keepTheLatestNotesHidden }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)
    const [lightColor, setLightColor] = useState("");
    const [darkColor, setDarkColor] = useState("")
    const [modalTitle, setModalTitle] = useState("");



    useEffect(() => {
        switch (noteObj.colorType) {
            case 1:
                setLightColor("bg-midYellowLight");
                setDarkColor("bg-midYellowDark");
                break;
            case 2:
                setLightColor("bg-midRedLight");
                setDarkColor("bg-midRedDark");
                break;
            case 3:
                setLightColor("bg-midPurpleLight");
                setDarkColor("bg-midPurpleDark");
                break;
            case 4:
                setLightColor("bg-midBlueLight");
                setDarkColor("bg-midBlueDark");
                break;
            case 5:
                setLightColor("bg-midGreenLight");
                setDarkColor("bg-midGreenDark");
                break;
        }
    }, [])
    const borderColor = darkColor.slice(3);
    console.log(noteObj)
    const showLinks = () => {

        setModalContent(<div className="flex flex-col gap-2 p-2 justify-center items-center">
            {noteObj.refUrl.map((url, i) => <UrlArea draft={noteObj.draft} key={i} url={url} />)}

        </div>)
        setModalTitle("All attached urls")

        document.getElementById('my_modal_1').showModal();
    }

    const AddLink = () => {
        setModalContent(<div className="flex flex-col gap-2 p-2 justify-center items-center">
            <AddNewUrlArea />
        </div>)
        setModalTitle("Attach a new url!")

        document.getElementById('my_modal_1').showModal();
    }

    return (<>
        <Modal title={modalTitle} >
            {modalContent}
        </Modal>
        <motion.div
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
                                className={`bg-transparent border focus:outline-none rounded px-2 py-1`} />
                            :
                            <motion.textarea
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`bg-transparent border min-h-32 border-${borderColor} focus:outline-none rounded px-2 py-1`} />

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
                                className="text-stone-900 text-xl text-opacity-90 ">{noteObj.content}</motion.p>

                        }
                    </>

                }
            </div>


            <div className="flex py-3 items-center">

                {keepTheLatestNotesHidden && delay === 0 ?
                    <div
                        className={`ease-linear duration-75 active:scale-90 p-1 rounded-xl cursor-pointer bg-opacity-50`}>
                        <BadgePlus className={`text-${borderColor}`} />
                    </div>
                    :
                    <div
                        className={`ease-linear duration-75 active:scale-90 p-1 rounded-xl cursor-pointer bg-opacity-50`}>
                        <BadgePlus
                            onClick={AddLink}
                            
                        />
                    </div>
                }
                <div
                    onClick={showLinks}
                    className={`ease-linear flex duration-75 active:scale-90 p-1 rounded-xl cursor-pointer bg-opacity-50`}>
                    <Link className={`text-${borderColor}`} />
                    <p>+2</p>
                </div>
            </div>

            <div className="flex justify-between items-center">

                {keepTheLatestNotesHidden && delay === 0 ?
                    <p className="text-stone-800 text-lg ">{noteObj.createdDate}</p>
                    :
                    <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-stone-800 text-lg text-opacity-75">{noteObj.createdDate}</motion.p>
                }
                <div
                    onClick={() => setIsEditing(true)}
                    className={`ease-linear duration-75 active:scale-90 p-1 rounded-xl cursor-pointer bg-opacity-50`}>
                    <Pencil className={`text-${borderColor}`} />
                </div>
            </div>
        </motion.div>
    </>)
}

const AddNewUrlArea = () => {
    const [URL, setURL] = useState("");
    const handleSave = () => {

    }
    return <div className="flex w-full flex-this.start gap-4 items-center" >
        <input
            className="bg-transparent focus:outline-none border border-stone-200 rounded-md p-1"
            value={URL}
            onChange={(e) => setURL(e.target.value)} /> 
        <Save onClick={handleSave}  className="cursor-pointer text-midGreenLight  active:scale-90 ease-linear duration-75"  />
    </div>
}

const UrlArea = ({ url, draft }) => {
    const [isEditing, setIsEditing] = useState(draft)
    const [URL, setURL] = useState(url);
    const handleSave = () => {
        if (URL === url) {
            console.log("first change the url and then update");
            return;
        }


        //UPDATE THE URL;
    }

    const handleDelete = () => {

    }

    return (<div className="flex justify-between p-1 w-full">
        {isEditing ? <input
            className="bg-transparent focus:outline-none border border-stone-200 rounded-md p-1"
            value={URL}
            onChange={(e) => setURL(e.target.value)} /> : <p>{url}</p>}
        <div className="flex gap-1">
            {!isEditing ? <EditIcon className="cursor-pointer text-midYellowLight active:scale-90 ease-linear duration-75" onClick={() => setIsEditing(true)} /> :
                <SaveIcon
                    className="cursor-pointer text-midGreenLight active:scale-90 ease-linear duration-75"
                    onClick={handleSave} />}
            <Trash
                onClick={handleDelete}
                className="cursor-pointer text-midRedLight active:scale-90 ease-linear duration-75" />
        </div>
    </div>)
}