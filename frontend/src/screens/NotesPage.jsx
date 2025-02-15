import { useEffect, useState } from "react"

import { NoteBox } from "../components/notebox"
import { useDispatch, useSelector } from "react-redux"
import { ProfileNavbar } from "../components/navbar";
import { useParams } from "react-router-dom";
import { useCustomFetch } from "../hooks/useFetch";
import { Loader } from "../components/loader";
import { notesListAction } from "../redux/notesList";

export const NotesPage = () => {
    const [keepTheLatestNotesHidden, setKeepTheLatestNotesHidden] = useState(false);
    useEffect(() => {
        if (!keepTheLatestNotesHidden) return;
        const timeout = setTimeout(() => {
            setKeepTheLatestNotesHidden(false)
        }, 1000)

        return () => clearTimeout(timeout)

    }, [keepTheLatestNotesHidden])
    return (<div className="bg-white" >
        <ProfileNavbar setKeepTheLatestNotesHidden={setKeepTheLatestNotesHidden} />
        <ProfileMain keepTheLatestNotesHidden={keepTheLatestNotesHidden} />
    </div>)
}

const ProfileMain = ({ keepTheLatestNotesHidden }) => {

    return (<div className="pt-20 pl-20 sm:pl-36 pb-12 pr-2 sm:pr-8 w-screen h-screen fixed top-0 left-0">

        <NoteArea keepTheLatestNotesHidden={keepTheLatestNotesHidden} />

    </div>
    )
}


const NoteArea = ({ keepTheLatestNotesHidden }) => {
    const { folderId } = useParams();
    const notesList = useSelector(state => state.notesList);
    const [folderName, setFolderName] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchAllNotes = async () => {
            setLoading(true)
            try {
                const response = await fetch(import.meta.env.VITE_BASE_URL + "folders/" + folderId + "/notes",
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwtToken'))}`,

                        },
                    },)

                const result = await response.json();
                dispatch(notesListAction.setNote(result));
                setFolderName(result.folderName)

                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }

        }

        fetchAllNotes()

    }, []
    )
    return (<div className="w-full h-full flex flex-col gap-2">

        {folderName === "" ? <Loader /> : <h1 className="pl-2" >{folderName}</h1>}
        <div key={notesList.length} className="overflow-y-scroll scrollbar-thin scrollbar-webkit overflow-x-hidden grid max-sm:place-items-center md:grid-cols-3 sm:grid-cols-2 gap-6 grid-cols-1 lg:grid-cols-4 row-auto">
            {notesList.length === 0 && <>You have no Notes!</>}
            {notesList.map((note, ind) => <NoteBox keepTheLatestNotesHidden={keepTheLatestNotesHidden} delay={ind / 10} key={ind} noteObj={note} />)}

        </div>
    </div>
    )
}