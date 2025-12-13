import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import type { IDataLogin } from "../../interfaces"
import { LoginSchema } from "../../validation"
import FormTitle from "../../components/form/FormTitle"
import AuthLayout from "../../layout/AuthLayout"
import { ArrowRight, Lock, Mail, Shield } from "lucide-react"
import Label from "../../components/common/Label"
import Input from "../../components/common/Input"
import ErrorMessage from "../../components/common/ErrorMessage"
import Checkbox from "../../components/common/Checkbox"
import AuthLink from "../../components/auth/AuthLink"
import Button from "../../components/common/Button"
import SocialButton from "../../components/auth/SocialButton"
import GoogleIcon from "../../icons/GoogleIcon"
import FacebookIcon from "../../icons/FacebookIcon"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<IDataLogin>({
            resolver: yupResolver(LoginSchema),
        })


    const onSubmit = handleSubmit((data) => console.log(data))

return (<>
    <AuthLayout w="lg:min-w-5xl">
        <FormTitle
        background = "bg-gradient-primary"
        icon={<Shield size={40} className="text-white"/>}
        title="مرحباً بعودتك"
        des="سجل دخولك للوصول إلى لوحة التحكم"/>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
            <div>
                <Label htmlFor="email" text="البريد الإلكتروني"/>
                <Input {...register("email")} type="email" name="email" id="email" pl="pl-4" error={!!errors.email} placeholder="أدخل بريدك الإلكتروني" autoFocus icon={<Mail size={24}/>}/>
                <ErrorMessage error={errors.email?.message}/>
            </div>
            <div>
                <Label htmlFor="password" text="كلمة المرور"/>
                <Input {...register("password")} type="password" name="password" id="password" error={!!errors.password} pl="pl-12" pass placeholder="أدخل أدخل كلمة المرور" icon={<Lock size={24}/>}/>
                <ErrorMessage error={errors.password?.message}/>
            </div>
            <div className="flex items-center justify-between font-main">
                <Checkbox text="تذكرني"/>
                <AuthLink url="/forgot-password" text="نسيت كلمة المرور؟" color="text-primary-500" hover="hover:primary-700"/>
            </div>
            <Button ariaLabel="login-btn" type="submit">
                <span>تسجيل الدخول</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="mt-8 text-center">
                <p className="text-text-body flex justify-center space-x-1">
                    ليس لديك حساب؟{' '}
                    <AuthLink url="/register" text="سجل الآن" color="text-primary-500" hover="hover:primary-700"/>
                </p>
            </div>
        </form>
        <div className="mt-8 pt-8 border-t border-gray-200 font-main">
            <Label center="text-center" text="أو سجل دخولك باستخدام"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SocialButton name="Google" icon={<GoogleIcon/>}/>
                <SocialButton name="Facebook" icon={<FacebookIcon/>}/>
            </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
            بالمتابعة، أنت توافق على{' '}
            <a href="#" className="text-primary-600 font-medium hover:underline">شروط الخدمة</a>
            {' '}و{' '}
            <a href="#" className="text-primary-600 font-medium hover:underline">سياسة الخصوصية</a>
        </p>
    </AuthLayout>
</>)
}

export default Login