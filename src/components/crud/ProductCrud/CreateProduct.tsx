import { useState } from "react"
import CustomeModal from "../../../shared/CustomeModal"
import { DollarSign, Hash, Package, Plus } from "lucide-react"
import Button from "../../common/Button"
import Input from "../../common/Input"
import Label from "../../common/Label"
import ErrorMessage from "../../common/ErrorMessage"
import { useForm } from "react-hook-form"
import type { IProduct } from "../../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { ProductSchema } from "../../../validation"
import Select from "../../form/Select"

const CreateProduct = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {register,handleSubmit,formState: { errors },} = useForm<IProduct>({
            resolver: yupResolver(ProductSchema),
        })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        setIsOpen(false)
    })

return (
    <>
    <Button ariaLabel="create-Product" w="w-fit" onClick={() => setIsOpen(true)}>
        <Plus size={20} />
        <span>إضافة منتج/خدمة</span>
    </Button>
    <CustomeModal desc="إدخال بيانات المننتج جديد." variant="create" isOpen={isOpen} setIsOpen={setIsOpen}>
    <form className="space-y-5 font-main" onSubmit={onSubmit}>
        <div>
            <Label htmlFor="name" text="اسم المنتج"/>
            <Input {...register("name")} type="text" name="name" id="name" pl="pl-4" error={!!errors.name} placeholder="أدخل اسم المنتج" autoFocus icon={<Package size={24}/>}/>
            <ErrorMessage error={errors.name?.message}/>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <Label htmlFor="price" text="اسم السعر"/>
                <Input {...register("price")} type="text" name="price" id="price" pl="pl-4" error={!!errors.price} placeholder="أدخل السعر" icon={<DollarSign size={24}/>}/>
                <ErrorMessage error={errors.price?.message}/>
            </div>
            <div>
                <Label htmlFor="quantity" text="الكميه"/>
                <Input {...register("quantity")} type="text" name="sales" id="quantity" pl="pl-4" error={!!errors.quantity} placeholder="أدخل الكمية" icon={<Hash size={24}/>}/>
                <ErrorMessage error={errors.quantity?.message}/>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
            <div>
                <Label text="تصنيف المنتج" />
                <Select {...register("trend")} error={!!errors.trend}>
                    <option value="">اختر التصنيف</option>
                    <option value="up">عالي</option>
                    <option value="dwon">منخفض</option>
                </Select>
                <ErrorMessage error={errors.trend?.message} />
            </div>
            <div>
                <Label text="حالة المنتج" />
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

export default CreateProduct
