import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
import Button from "../../common/Button"

const ViewProduct = () => {
    const [isOpen, setIsOpen] = useState(false)

    const product ={ name: 'خدمة الخياطة', price: 500, quantity: 89, trend: 'عالي', change: 15, status: 'نشط' }


return (
    <>
        <CrudActions variant="view" onClick={() => setIsOpen(true)} />

        <CustomeModal
            variant="view"
            desc="عرض معلومات المنتج."
            isOpen={isOpen}
            setIsOpen={setIsOpen}>

            <div className="space-y-4 font-main text-gray-700">
                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">اسم المنتج:</span> {product.name}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">سعر المنتج:</span> {product.price}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">كمية المنتج:</span> {product.quantity}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">اداء المنتج:</span> {product.trend}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm">
                        <span className="font-semibold">حالة المنتج:</span> {product.status}
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

export default ViewProduct
