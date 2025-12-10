import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"

const UpdateComplaint = () => {
    const [isOpen, setIsOpen] = useState(false)

return (
    <>
    <CrudActions variant="update" onClick={() => setIsOpen(true)}/>

    <CustomeModal
        variant="update"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
    >
    <form>

    </form>
    </CustomeModal>
    </>
)}

export default UpdateComplaint
