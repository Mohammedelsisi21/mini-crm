import { useState } from "react"
import CustomeModal from "../../../shared/CustomeModal"
import { Plus, Tag } from "lucide-react"
import Button from "../../common/Button"
import Input from "../../common/Input"
import Label from "../../common/Label"
import ErrorMessage from "../../common/ErrorMessage"
import { useForm } from "react-hook-form"
import type { ICategory } from "../../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { CategorySchema } from "../../../validation"

const CreateCommunication = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {register,handleSubmit,formState: { errors },} = useForm<ICategory>({
            resolver: yupResolver(CategorySchema),
        })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        setIsOpen(false)
    })

return (
    <>
    <Button ariaLabel="create-Category" w="w-fit" onClick={() => setIsOpen(true)}>
        <Plus size={20} />
        <span>إضافة تصنيف</span>
    </Button>
    <CustomeModal desc="إدخال بيانات التصنيف جديد." variant="create" isOpen={isOpen} setIsOpen={setIsOpen}>
    <form className="space-y-5 font-main" onSubmit={onSubmit}>
        <div>
            <Label htmlFor="category" text="اسم العميل"/>
            <Input {...register("category")} type="text" name="category" id="category" pl="pl-4" error={!!errors.category} placeholder="أدخل اسم العميل" autoFocus icon={<Tag size={24}/>}/>
            <ErrorMessage error={errors.category?.message}/>
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

export default CreateCommunication
