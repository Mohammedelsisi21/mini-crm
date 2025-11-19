import { useState } from 'react'
import Input from './Input';
import { FiEyeOff } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';
import { BiLock } from 'react-icons/bi';

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
return (<>
    <Input type={showPassword ? "text" : "password"} name="password" pl="pl-12" placeholder="أدخل كلمة المرور" icon={<BiLock />} cheldreen={
    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all">
        {showPassword ? <FiEyeOff size={20} /> : <BsEye size={20} />}
    </button>}
    />
</>)
}

export default PasswordInput