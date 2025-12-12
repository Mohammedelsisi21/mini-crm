import { useState } from "react"
import CustomeModal from "../../../shared/CustomeModal"
import { User } from "lucide-react"
import Button from "../../common/Button"
import Input from "../../common/Input"
import Label from "../../common/Label"
import ErrorMessage from "../../common/ErrorMessage"
import { useForm } from "react-hook-form"
import type { ICummunication } from "../../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { CommunicationSchema } from "../../../validation"
import Select from "../../form/Select"
import Textarea from "../../common/Textarea"
import CrudActions from "../../common/CrudActions"

const UpdateCommunication = () => {
    const defaultValues = {
        username: "احمد محمد",
        employee: "احمد ابراهيم",
        description: "العميل مهتم بالخدمة ويريد معرفة الأسعار والمواعيد.",
        contactType: "call",
        status: "urgent",
    }
    const [isOpen, setIsOpen] = useState(false)
    const {register,handleSubmit,formState: { errors },} = useForm<ICummunication>({
            defaultValues,
            resolver: yupResolver(CommunicationSchema),
        })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        setIsOpen(false)
    })

return (
    <>
    <CrudActions variant="update" onClick={() => setIsOpen(true)} />
    <CustomeModal desc="تحديث بيانات التواصل." variant="update" isOpen={isOpen} setIsOpen={setIsOpen}>
    <form className="space-y-5 font-main" onSubmit={onSubmit}>
        <div>
            <Label htmlFor="username" text="اسم العميل"/>
            <Input {...register("username")} type="text" name="username" id="username" pl="pl-4" error={!!errors.username} placeholder="أدخل اسم العميل" autoFocus icon={<User size={24}/>}/>
            <ErrorMessage error={errors.username?.message}/>
        </div>
        <div>
            <Label htmlFor="employee" text="اسم الموظف"/>
            <Input {...register("employee")} type="text" name="employee" id="employee" pl="pl-4" error={!!errors.employee} placeholder="أدخل اسم الموظف" icon={<User size={24}/>}/>
            <ErrorMessage error={errors.employee?.message}/>
        </div>
        <div>
            <Label htmlFor="description" text="وصف التواصل"/>
            <Textarea {...register("description")} name="description" id="description" error={!!errors.description} placeholder="أدخل وصف للتواصل"/>
            <ErrorMessage error={errors.description?.message}/>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <Label htmlFor="contactType" text="نوع التواصل" />
                <Select id="contactType" {...register("contactType")} error={!!errors.contactType}>
                    <option value="">اختر نوع التواصل</option>
                    <option value="call">مكالمة هاتفية</option>
                    <option value="email">بريد إلكتروني</option>
                    <option value="meeting">اجتماع</option>
                    <option value="whatsapp">واتساب</option>
                    <option value="other">أخرى</option>
                </Select>
                <ErrorMessage error={errors.contactType?.message} />
            </div>
            <div>
                <Label htmlFor="status" text="حالة التواصل" />
                <Select id="status" {...register("status")} error={!!errors.status}>
                    <option value="">اختر الحالة</option>
                    <option value="urgent">عاجلة</option>
                    <option value="medium">متوسطة</option>
                    <option value="normal">عادي</option>
                </Select>
                <ErrorMessage error={errors.status?.message} />
            </div>
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

export default UpdateCommunication
