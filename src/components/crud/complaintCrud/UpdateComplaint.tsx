import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
import Button from "../../common/Button"
import Label from "../../common/Label"
import Input from "../../common/Input"
import ErrorMessage from "../../common/ErrorMessage"
import Textarea from "../../common/Textarea"
import Select from "../../form/Select"
import { useForm } from "react-hook-form"
import type { IComplaint } from "../../../interfaces"
import { ComplaintSchema } from "../../../validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { AlertTriangle, User } from "lucide-react"

interface IProps {
    complaint: IComplaint
}
const UpdateComplaint = ({complaint} : IProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const {register,handleSubmit,formState: { errors },} = useForm<IComplaint>({
            defaultValues: complaint,
            resolver: yupResolver(ComplaintSchema),
        })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        setIsOpen(false)
    })

return (
    <>
    <CrudActions variant="update" onClick={() => setIsOpen(true)}/>

    <CustomeModal variant="update" isOpen={isOpen} setIsOpen={setIsOpen}>
    <form className="space-y-5 font-main" onSubmit={onSubmit}>
        <div>
            <Label htmlFor="username" text="اسم العميل"/>
            <Input {...register("username")} type="text" name="username" id="username" pl="pl-4" error={!!errors.username} placeholder="أدخل اسم العميل" autoFocus icon={<User size={24}/>}/>
            <ErrorMessage error={errors.username?.message}/>
        </div>
        <div>
            <Label htmlFor="issueType" text="نوع المشكلة"/>
            <Input {...register("issueType")} type="text" name="issueType" id="issueType" pl="pl-4" error={!!errors.issueType} placeholder="ادخل نوع المشكلة" autoFocus icon={<AlertTriangle size={24}/>}/>
            <ErrorMessage error={errors.issueType?.message}/>
        </div>
        <div>
            <Label htmlFor="description" text="وصف التواصل"/>
            <Textarea {...register("description")} name="description" id="description" error={!!errors.description} placeholder="أدخل وصف للتواصل"/>
            <ErrorMessage error={errors.description?.message}/>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <Label htmlFor="status" text="اختر الحالة" />
                <Select id="status" {...register("status")} error={!!errors.status}>
                    <option value="">الحالة الحالة</option>
                    <option value="new">جديد</option>
                    <option value="in_progress">قيد المعالجة</option>
                    <option value="processing">قيد الحل</option>
                    <option value="resolved">تم الحل</option>
                    <option value="rejected">مرفوضه</option>
                </Select>
                <ErrorMessage error={errors.status?.message} />
            </div>
            <div>
                <Label htmlFor="priority" text="اختر الأولوية" />
                <Select id="priority" {...register("priority")} error={!!errors.priority}>
                    <option value="">اختر الأولوية</option>
                    <option value="urgent">عاجلة</option>
                    <option value="medium">متوسطة</option>
                    <option value="normal">عادي</option>
                </Select>
                <ErrorMessage error={errors.priority?.message} />
            </div>
        </div>
        <div>
            <Label htmlFor="priority" text="الموظف" />
            <Select id="assignedTo" {...register("assignedTo")} error={!!errors.assignedTo}>
                <option value="">اختر الموظف</option>
                <option value="1">نور الدين</option>
                <option value="2">محمد حسن</option>
                <option value="3">سارة أحمد</option>
            </Select>
            <ErrorMessage error={errors.assignedTo?.message} />
        </div>
        <div className="flex gap-3 pt-4 justify-end">
            <Button ariaLabel="cancel-update" variant="outline" w="w-fit" onClick={() => setIsOpen(false)}>
                إلغاء
            </Button>
            <Button ariaLabel="cancel-update" type="submit" variant="warning" w="w-fit">
                تحديث
            </Button>
        </div>
    </form>
    </CustomeModal>
    </>
)}

export default UpdateComplaint
