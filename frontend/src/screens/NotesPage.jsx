import { useEffect, useState } from "react"

import { NoteBox } from "../components/notebox"
import { useSelector } from "react-redux"
import { ProfileNavbar } from "../components/navbar";
import { useParams } from "react-router-dom";
import { useCustomFetch } from "../hooks/useFetch";

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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notesArr, setNotesArr] = useState(notesList)
    useEffect(() => {
        const fetchAllNotes = async() => {
            const response = await fetch(import.meta.env.VITE)
        }
    })
    return (<div className="w-full h-full flex flex-col gap-2">
        <h1 className="pl-2" >folder name</h1>
        <div key={notesList.length} className="overflow-y-scroll grid max-sm:place-items-center md:grid-cols-3 sm:grid-cols-2 gap-6 grid-cols-1 lg:grid-cols-4 row-auto">

            {notesList.map((note, ind) => <NoteBox keepTheLatestNotesHidden={keepTheLatestNotesHidden} delay={ind / 10} key={ind} noteObj={note} />)}

        </div>
    </div>
    )
}