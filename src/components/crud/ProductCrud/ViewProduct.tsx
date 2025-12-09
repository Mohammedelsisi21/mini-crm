import { useState } from "react"
import CrudActions from "../../common/CrudActions"
import CustomeModal from "../../../shared/CustomeModal"
const ViewProduct = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (<>
    <CrudActions variant="view" setIsOpen={() => setIsOpen(true)}/>
    <CustomeModal textBtn="sssssssss" title="sssssssssss" desc="ssssssssssssss" isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>children="sssSSSSS"</p>
    </CustomeModal>
</>)
}

export default ViewProduct