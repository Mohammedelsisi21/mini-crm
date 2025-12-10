import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"

const ViewCustomer = () => {
    const [isOpen, setIsOpen] = useState(false)

return (
    <>
    <CrudActions variant="view" onClick={() => setIsOpen(true)}/>

    <CustomeModal
        variant="view"
        desc="تفاصيل العميل"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
    >
        <p className="text-gray-700">البيانات الخاصة بالتواصل تظهر هنا...</p>
    </CustomeModal>
    </>
)}

export default ViewCustomer
