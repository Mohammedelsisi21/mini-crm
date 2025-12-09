import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { type ReactNode } from "react"

interface IProps {
    title: string
    desc: string
    children: ReactNode
    textBtn: string
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}

const CustomeModal = ({ children, desc, title, textBtn, isOpen, setIsOpen,}: IProps) => {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className=" max-w-lg w-full space-y-4  bg-white p-8 rounded-2xl shadow-xl border border-blue-100 animate-modal">
                    <DialogTitle className="text-xl font-semibold text-blue-700">
                        {title}
                    </DialogTitle>
                    <Description className="text-gray-600 text-sm">
                        {desc}
                    </Description>
                    <div>{children}</div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button onClick={() => setIsOpen(false)} className=" px-4 py-2 rounded-lg text-sm  border border-gray-300 text-gray-700  hover:bg-gray-100 transition">
                            Cancel
                        </button>
                        <button onClick={() => setIsOpen(false)} className=" px-4 py-2 rounded-lg text-sm  bg-blue-600 text-white  hover:bg-blue-700 transition">
                            {textBtn}
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )}

export default CustomeModal
