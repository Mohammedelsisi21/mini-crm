import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
import Button from "../../common/Button"

const ViewCategory = () => {
    const [isOpen, setIsOpen] = useState(false)

    const category = {
        classification: "VIP",
        number: 4
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
                        <span className="font-semibold">اسم التصنيف: </span> {category.classification}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">عدد العملاء: </span> {category.number}
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

export default ViewCategory
