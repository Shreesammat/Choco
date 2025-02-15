import { useEffect, useState } from "react"
import { ProfileNavbar } from "../components/navbar"
import { NoteBox } from "../components/notebox"
import { useSelector } from "react-redux"

export const ProfilePage = () => {
    const [keepTheLatestNotesHidden, setKeepTheLatestNotesHidden] = useState(false);
    useEffect(() => {
        if(!keepTheLatestNotesHidden) return;
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

const ProfileMain = ({keepTheLatestNotesHidden}) => {

    
    const notesList = useSelector(state => state.notesList);
    return (<div key={notesList.length} className="pt-20 overflow-y-scroll pl-36 pb-12 max-sm:place-items-center pr-8 grid md:grid-cols-3 sm:grid-cols-2 gap-6 grid-cols-1 lg:grid-cols-4 w-screen h-screen fixed top-0 left-0 row-auto">

        {notesList.map((note, ind) => <NoteBox keepTheLatestNotesHidden={keepTheLatestNotesHidden} delay={ind / 10} key={ind} noteObj={note} />)}

    </div>)
}