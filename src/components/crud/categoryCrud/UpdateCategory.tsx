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

interface IProps {
    category: ICategory
}

const UpdateCategory = ({category} : IProps) => {
    const defaultValues = {
        category: category.category
    }
    const [isOpen, setIsOpen] = useState(false)
    const {register,handleSubmit,formState: { errors },} = useForm<ICategory>({
            defaultValues,
            resolver: yupResolver(CategorySchema),
        })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        setIsOpen(false)
    })

return (
    <>
    <CrudActions variant="update" onClick={() => setIsOpen(true)}/>
    <CustomeModal desc="إدخال بيانات التصنيف." variant="create" isOpen={isOpen} setIsOpen={setIsOpen}>
    <form className="space-y-5 font-main" onSubmit={onSubmit}>
        <div>
            <Label htmlFor="category" text="اسم التصنيف"/>
            <Input {...register("category")} type="text" name="category" id="category" pl="pl-4" error={!!errors.category} placeholder="أدخل اسم العميل" autoFocus icon={<Tag size={24}/>}/>
            <ErrorMessage error={errors.category?.message}/>
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
