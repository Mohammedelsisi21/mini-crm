import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
import Button from "../../common/Button"

const ViewCommunication = () => {
    const [isOpen, setIsOpen] = useState(false)

    const communication = {
        username: "محمد أحمد",
        contactType: "مكالمة هاتفية",
        employee: "محمد ابراهيم",
        description: "العميل مهتم بالخدمة ويريد معرفة الأسعار والمواعيد.",
        status: "عاجلة",
    }

return (
    <>
        <CrudActions variant="view" onClick={() => setIsOpen(true)} />

        <CustomeModal
            variant="view"
            desc="عرض معلومات التواصل."
            isOpen={isOpen}
            setIsOpen={setIsOpen}>

            <div className="space-y-4 font-main text-gray-700">
                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">اسم العميل: </span> {communication.username}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">اسم الموظف: </span> {communication.employee}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">نوع االتواصل: </span> {communication.contactType}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">حالة التواصل: </span> {communication.status}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">وصف التواصل: </span> {communication.description}
                    </p>
                </div>
            </div>
            <div className="flex gap-3 pt-4 justify-end">
                <Button ariaLabel="cancel-viwe" variant="blue" w="w-fit" onClick={() => setIsOpen(false)}>
                    اغلاق
                </Button>
            </div>
        </CustomeModal>
    </>
)}

export default ViewCommunication
