import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { type ReactNode } from "react"

type ModalVariant = "view" | "create" | "update" | "delete"

interface IProps {
    desc?: string
    children?: ReactNode
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    variant: ModalVariant
}

const CustomeModal = ({ children, desc, isOpen, setIsOpen, variant}: IProps) => {

    const defaultTitles: Record<ModalVariant, string> = {
        view: "عرض التفاصيل",
        create: "إضافة عنصر جديد",
        update: "تعديل البيانات",
        delete: "حذف ",
    }

return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg w-full space-y-4 bg-white p-8 rounded-2xl shadow-xl border border-gray-200 animate-modal">

                <DialogTitle className={`text-xl font-semibold ${
                    variant === "delete" ? "text-red-600" :
                    variant === "create" ? "text-success-600" :
                    variant === "view" ? "text-primary-600" :
                    variant === "update" ? "text-warning-600" :
                    ""
                }`}>
                    {defaultTitles[variant]}
                </DialogTitle>

                {desc && (
                    <Description className="text-gray-600 text-sm">
                        {desc}
                    </Description>
                )}

                <div>{children}</div>
            </DialogPanel>
        </div>
    </Dialog>
)}

export default CustomeModal
