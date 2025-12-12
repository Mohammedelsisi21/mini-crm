import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
import Button from "../../common/Button"
interface IProps {
    id: number
}

const DeleteComplaint = ({id}: IProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleDelete = () => {
        console.log(id)
        setIsOpen(false)
    }

return (
    <>
    <CrudActions  variant="delete"  onClick={() => setIsOpen(true)}/>
    <CustomeModal
        desc="هل أنت متأكد من حذف هذة المشكلة؟ لا يمكن استرجاعه."
        variant="delete"
        isOpen={isOpen}
        setIsOpen={setIsOpen}>

        <div className="py-4 font-main text-gray-700">
            <p>سيتم حذف بيانات هذة المشكلة نهائيًا.</p>
            <p className="mt-1">لن تتمكن من استعادة المعلومات بعد الحذف.</p>
        </div>

        <div className="flex gap-3 pt-4 justify-end">
            <Button ariaLabel="cancel-delete" variant="outline" w="w-fit" onClick={() => setIsOpen(false)}>
                إلغاء
            </Button>

            <Button ariaLabel="confirm-delete" variant="danger" w="w-fit" type="submit" onClick={handleDelete}>
                حذف المشكلة
            </Button>
        </div>
    </CustomeModal>
    </>
)}

export default DeleteComplaint
