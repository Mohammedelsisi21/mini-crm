import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
import Button from "../../common/Button"
import type { IComplaint } from "../../../interfaces"

interface IProps {
    complaint: IComplaint
}

const ViewComplaint = ({ complaint }: IProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <CrudActions variant="view" onClick={() => setIsOpen(true)} />
            <CustomeModal variant="view" desc="عرض تفاصيل الشكوى." isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="space-y-4 font-main text-gray-700">
                    <div className="flex items-center gap-3">
                        <p className="text-sm">
                            <span className="font-semibold">اسم العميل: </span>
                            {complaint.username}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-sm">
                            <span className="font-semibold">نوع المشكلة: </span>
                            {complaint.issueType}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-sm">
                            <span className="font-semibold">الوصف: </span>
                            {complaint.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-sm">
                            <span className="font-semibold">الحالة: </span>
                            {complaint.status}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-sm">
                            <span className="font-semibold">الأولوية: </span>
                            {complaint.priority}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-sm">
                            <span className="font-semibold">الموظف المسؤول: </span>
                            {complaint.assignedTo}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 pt-4 justify-end">
                    <Button ariaLabel="cancel-view" variant="blue" w="w-fit" onClick={() => setIsOpen(false)}>
                        إغلاق
                    </Button>
                </div>
            </CustomeModal>
        </>
    )
}

export default ViewComplaint
