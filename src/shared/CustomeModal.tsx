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
        delete: "حذف العنصر",
    }

    const defaultButtons: Record<ModalVariant, string> = {
        view: "إغلاق",
        create: "حفظ",
        update: "تحديث",
        delete: "حذف",
    }

    const btnColors: Record<ModalVariant, string> = {
        view: "bg-primary-600 hover:bg-primary-700",
        create: "bg-success-600 hover:bg-success-700",
        update: "bg-warning-500 hover:bg-warning-600",
        delete: "bg-error-600 hover:bg-error-700",
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

                {variant === "delete" && (
                    <p className="text-red-600 text-sm font-medium">
                        ⚠ هل أنت متأكد أنك تريد حذف هذا العنصر؟ لا يمكن التراجع عن العملية.
                    </p>
                )}

                <div className="flex gap-3 pt-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 rounded-lg text-sm border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                        إلغاء
                    </button>

                    <button
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-2 rounded-lg text-sm cursor-pointer text-white transition ${btnColors[variant]}`}>
                            {defaultButtons[variant]}
                    </button>
                </div>
            </DialogPanel>
        </div>
    </Dialog>
)}

export default CustomeModal
