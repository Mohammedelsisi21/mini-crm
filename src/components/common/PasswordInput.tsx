import { useState } from 'react'
import Input from './Input';
import { Eye, EyeOff, Lock } from 'lucide-react';

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
return (<>
    <Input type={showPassword ? "text" : "password"} name="password" pl="pl-12" placeholder="أدخل كلمة المرور" icon={<Lock />} cheldreen={
    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all">
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>}
    />
</>)
}

export default PasswordInput