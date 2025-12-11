import { useState } from "react"
import CustomeModal from "../../../shared/CustomeModal"
import { Tag } from "lucide-react"
import Button from "../../common/Button"
import Input from "../../common/Input"
import Label from "../../common/Label"
import ErrorMessage from "../../common/ErrorMessage"
import { useForm } from "react-hook-form"
import type { ICategory } from "../../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { CategorySchema } from "../../../validation"
import CrudActions from "../../common/CrudActions"

const UpdateCategory = () => {
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
    <CrudActions variant="update" onClick={() => setIsOpen(true)}/>
    <CustomeModal desc="إدخال بيانات التصنيف جديد." variant="create" isOpen={isOpen} setIsOpen={setIsOpen}>
    <form className="space-y-5 font-main" onSubmit={onSubmit}>
        <div>
            <Label htmlFor="classification" text="اسم العميل"/>
            <Input {...register("classification")} value="VIP" type="text" name="classification" id="classification" pl="pl-4" error={!!errors.classification} placeholder="أدخل اسم العميل" autoFocus icon={<Tag size={24}/>}/>
            <ErrorMessage error={errors.classification?.message}/>
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

export default UpdateCategory
