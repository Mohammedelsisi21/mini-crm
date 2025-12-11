import { useState } from "react"
import CustomeModal from "../../../shared/CustomeModal"
import { Mail, Phone, Plus, User } from "lucide-react"
import Button from "../../common/Button"
import Input from "../../common/Input"
import Label from "../../common/Label"
import ErrorMessage from "../../common/ErrorMessage"
import { useForm } from "react-hook-form"
import type { ICustomer } from "../../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { CustomerSchema } from "../../../validation"
import Select from "../../form/Select"

const CreateCustomer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {register,handleSubmit,formState: { errors },} = useForm<ICustomer>({
            resolver: yupResolver(CustomerSchema),
        })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        setIsOpen(false)
    })

return (
    <>
    <Button ariaLabel="add-cummunication" w="w-fit" onClick={() => setIsOpen(true)}>
        <Plus size={20} />
        <span>إضافة عميل</span>
    </Button>
    <CustomeModal desc="إدخال بيانات عميل جديد." variant="create" isOpen={isOpen} setIsOpen={setIsOpen}>
    <form className="space-y-5 font-main" onSubmit={onSubmit}>
        <div>
            <Label htmlFor="username" text="اسم العميل"/>
            <Input {...register("username")} type="text" name="username" id="username" pl="pl-4" error={!!errors.username} placeholder="أدخل اسم العميل" autoFocus icon={<User size={24}/>}/>
            <ErrorMessage error={errors.username?.message}/>
        </div>
        <div>
            <Label htmlFor="email" text="البريد الإلكتروني"/>
            <Input {...register("email")} type="email" name="email" id="email" pl="pl-4" error={!!errors.email} placeholder="أدخل البريد الإلكتروني" icon={<Mail size={24}/>}/>
            <ErrorMessage error={errors.email?.message}/>
        </div>
        <div>
            <Label htmlFor="phone" text="اسم العميل"/>
            <Input {...register("phone")} type="tel" name="phone" id="phone" pl="pl-4" error={!!errors.phone} placeholder="010 | 011 | 012 | 015" icon={<Phone size={24}/>}/>
            <ErrorMessage error={errors.phone?.message}/>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <Label text="تصنيف العميل" />
                <Select {...register("classification")} error={!!errors.classification}>
                    <option value="">اختر التصنيف</option>
                    <option value="VIP">VIP</option>
                    <option value="new">جديد</option>
                    <option value="normal">عادي</option>
                </Select>
                <ErrorMessage error={errors.classification?.message} />
            </div>
            <div>
                <Label text="حالة العميل" />
                <Select {...register("status")} error={!!errors.status}>
                    <option value="">اختر الحالة</option>
                    <option value="active">نشط</option>
                    <option value="inactive">غير نشط</option>
                </Select>
                <ErrorMessage error={errors.status?.message} />
            </div>
        </div>
        <div className="flex gap-3 pt-4 justify-end">
            <Button ariaLabel="cancel-create" variant="outline" w="w-fit" onClick={() => setIsOpen(false)}>
                إلغاء
            </Button>
            <Button ariaLabel="cancel-create" type="submit" variant="success" w="w-fit">
                حفظ
            </Button>
        </div>
    </form>
    </CustomeModal>
    </>
)}

export default CreateCustomer
