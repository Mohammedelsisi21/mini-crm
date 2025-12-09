import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"

const DeleteCommunication = () => {
    const [isOpen, setIsOpen] = useState(false)

return (
    <>
    <CrudActions variant="delete" onClick={() => setIsOpen(true)}/>

    <CustomeModal
        variant="delete"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
    >
    </CustomeModal>
    </>
)}

export default DeleteCommunication
