import { useState } from "react"
import CustomeModal from "../../../shared/CustomeModal"
import { Plus } from "lucide-react"
import Button from "../../common/Button"

const CreateCommunication = () => {
    const [isOpen, setIsOpen] = useState(false)

return (
    <>
    <Button ariaLabel="add-cummunication" w="w-fit" onClick={() => setIsOpen(true)}>
        <Plus size={20} />
        <span>إضافة تواصل</span>
    </Button>
    <CustomeModal
        variant="create"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
    >
    <form>
        
    </form>
    </CustomeModal>
    </>
)}

export default CreateCommunication
