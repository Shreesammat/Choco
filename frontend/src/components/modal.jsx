import { createPortal } from "react-dom"

export const Modal = ({children, title}) => {
    
    
    return (createPortal(<div className="fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white text-stone-700">
            <h3 className="font-bold text-lg">{title}</h3>
            <div className="flex flex-col gap-2" >
               {children}
            </div> 
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn bg-transparent border border-stone-400 text-stone-600 hover:bg-slate-100">Close</button>
                </form>
            </div>
        </div>
    </dialog>
    </div>,document.body))
}