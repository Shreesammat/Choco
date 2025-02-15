import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { ProfileNavbar2 } from "../components/navbar";
import { Folder } from "../components/folder";
import { foldersAction } from "../redux/folderList";
import {useCustomFetch} from "../hooks/useFetch"

export const FoldersPage = () => {
    const [keepTheLatestNotesHidden, setKeepTheLatestNotesHidden] = useState(false);
    useEffect(() => {
        if (!keepTheLatestNotesHidden) return;
        const timeout = setTimeout(() => {
            setKeepTheLatestNotesHidden(false)
        }, 1000)

        return () => clearTimeout(timeout)

    }, [keepTheLatestNotesHidden])
    return (<div className="bg-white" >
        <ProfileNavbar2 setKeepTheLatestNotesHidden={setKeepTheLatestNotesHidden} />
        <ProfileMain keepTheLatestNotesHidden={keepTheLatestNotesHidden} />
    </div>)
}

const ProfileMain = ({ keepTheLatestNotesHidden }) => {

    return (<div className="pt-20 pl-36 pb-12 pr-8 w-screen h-screen fixed top-0 left-0">

        <FolderArea  />

    </div>
    )
}


const FolderArea = () => {

    const { data, loading } = useCustomFetch(import.meta.env.VITE_BASE_URL + "folders/user");
    const folderList = useSelector(state => state.folder)
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(foldersAction.setFolder(data))
    }, [folderList, dispatch])
 
    console.log(folderList)
    return (
        loading ? (
            <div>loading..</div>
        ) : (
            <div key={folderList?.length} className="overflow-y-scroll grid max-sm:place-items-center md:grid-cols-3 sm:grid-cols-2 gap-6 grid-cols-1 lg:grid-cols-4 row-auto">
                {folderList?.map((folder, ind) => (
                    <Folder folderObj={folder} delay={ind / 10} key={ind} />
                ))}
            </div>
        )
    )
}