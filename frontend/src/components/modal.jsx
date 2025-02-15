import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion";
export const Modal = ({ children, title, onClose, modalIsOpen }) => {

    console.log("children of modal: ", children)
    console.log('title: ', title)
    return (createPortal(<>

        <AnimatePresence>
            {modalIsOpen &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-screen h-screen fixed top-0 left-0 z-50 bg-opacity-45 bg-slate-100"></motion.div>
            }
        </AnimatePresence>
        <div key={title} className="fixed z-50 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">

            <AnimatePresence>
                {modalIsOpen &&
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white min-w-48 sm:min-w-96 text-stone-700 rounded-xl p-5 flex flex-col gap-4 border">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <div className="flex flex-col gap-2" >
                            {children}
                        </div>
                        <div className="">
                            <button
                                onClick={onClose}
                                className="btn bg-transparent border border-stone-400 text-stone-600 hover:bg-slate-100">Close</button>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    </>, document.body))
}