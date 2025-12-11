import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
import Button from "../../common/Button"

const ViewCustomer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const customer = {
        username: "محمد أحمد",
        email: "mohamed@example.com",
        phone: "01012345678",
        classification: "VIP",
        status: "نشط",
    }

return (
    <>
        <CrudActions variant="view" onClick={() => setIsOpen(true)} />

        <CustomeModal
            variant="view"
            desc="عرض معلومات العميل."
            isOpen={isOpen}
            setIsOpen={setIsOpen}>

            <div className="space-y-4 font-main text-gray-700">
                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">اسم العميل:</span> {customer.username}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">البريد الإلكتروني:</span> {customer.email}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">رقم الهاتف:</span> {customer.phone}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">تصنيف العميل:</span> {customer.classification}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">حالة العميل:</span> {customer.status}
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

export default ViewCustomer
