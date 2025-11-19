import { useState } from "react";
import { BiLock, BiShield } from "react-icons/bi"
import { BsArrowRight, BsEye } from "react-icons/bs"
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import Input from "../../components/common/Input";
import LableForm from "../../components/common/LableForm";
import SocialButton from "../../components/common/SocialButton";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    return (<>
    <div className="min-h-screen bg-linear-to-br from-background to-background-alt flex items-center justify-center md:p-10">
        <div className="min-w-full lg:min-w-5xl">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="text-center mb-8">
                    <div style={{background: 'var(--gradient-primary)'}} className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <BiShield size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-text-heading mb-2 font-heading">مرحباً بعودتك</h2>
                    <p className="text-text-body font-main">سجل دخولك للوصول إلى لوحة التحكم</p>
                </div>
                <form className="space-y-5 font-main">
                    <div>
                        <LableForm text="البريد الإلكتروني"/>
                        <Input type="email" name="email" pl="pl-4" placeholder="أدخل بريدك الإلكتروني" icon={<CiMail size={20}/>}/>
                    </div>
                    <div>
                        <LableForm text="كلمة المرور"/>
                        <Input type={showPassword ? "text" : "password"} name="password" pl="pl-12" placeholder="أدخل كلمة المرور" icon={<BiLock />} cheldreen={
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all">
                                {showPassword ? <FiEyeOff size={20} /> : <BsEye size={20} />}
                            </button>
                        }/>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-primary-500 focus:ring-primary-500"/>
                            <span className="text-sm text-gray-700 font-medium">تذكرني</span>
                        </label>
                        <button type="button" className="cursor-pointer text-sm font-semibold text-primary-500 hover:text-primary-500-dark transition-all" >
                            نسيت كلمة المرور؟
                        </button>
                    </div>
                    <button type="submit" style={{background: 'var(--gradient-primary)'}} className="w-full cursor-pointer text-white py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2 group">
                        <span>تسجيل الدخول</span>
                        <BsArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="mt-8 text-center">
                        <p className="text-text-body">
                            ليس لديك حساب؟{' '}
                            <button className="text-primary-500 font-bold cursor-pointer hover:text-primary-500-dark transition-all">
                                سجل الآن
                            </button>
                        </p>
                    </div>
                </form>
                <div className="mt-8 pt-8 border-t border-gray-200 font-main">
                        <p className="text-center text-sm text-gray-500 mb-4">أو سجل دخولك باستخدام</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SocialButton name="Google" icon={<FcGoogle size={20}/>}/>
                            <SocialButton name="Facebook" icon={<SiFacebook size={20} className="text-primary-500"/>}/>
                        </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                    بالمتابعة، أنت توافق على{' '}
                    <a href="#" className="text-primary-500 font-medium hover:underline">شروط الخدمة</a>
                    {' '}و{' '}
                    <a href="#" className="text-primary-500 font-medium hover:underline">سياسة الخصوصية</a>
                </p>
            </div>
        </div>
    </div>
</>)
}

export default Login