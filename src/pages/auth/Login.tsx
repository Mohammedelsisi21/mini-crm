import Input from "../../components/common/Input";
import Label  from "../../components/common/Label";
import AuthLayout from "../../layouts/AuthLayout";
import FormTitle from "../../components/form/FormTitle";
import PasswordInput from "../../components/common/PasswordInput";
import Checkbox from "../../components/common/Checkbox";
import AuthLink from "../../components/common/AuthLink";
import Button from "../../components/common/Button";
import { ArrowRight, Mail, Shield } from "lucide-react";
import GoogleIcon from "../../icons/GoogleIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import SocialButton from "../../components/common/SocialButton";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup"


type FormData = {
    email: string
    password: string
}
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<FormData>({
            resolver: yupResolver(LoginSchema),
        })


    const onSubmit = handleSubmit((data) => console.log(data))

return (<>
    <AuthLayout>
        <FormTitle
        icon={<Shield size={32} className="text-white"/>}
        title="مرحباً بعودتك"
        des="سجل دخولك للوصول إلى لوحة التحكم"/>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
            <div>
                <Label  text="البريد الإلكتروني"/>
                <Input {...register("email")} type="email" name="email" pl="pl-4" placeholder="أدخل بريدك الإلكتروني" icon={<Mail size={20}/>}/>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
                <Label  text="كلمة المرور"/>
                <PasswordInput/>
            </div>
            <div className="flex items-center justify-between font-main">
                <Checkbox text="تذكرني"/>
                <AuthLink text="نسيت كلمة المرور؟"/>
            </div>
            <Button type="submit">
                <span>تسجيل الدخول</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="mt-8 text-center">
                <p className="text-text-body">
                    ليس لديك حساب؟{' '}
                    <AuthLink text="سجل الآن"/>
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
            <a href="#" className="text-primary-500 font-medium hover:underline">شروط الخدمة</a>
            {' '}و{' '}
            <a href="#" className="text-primary-500 font-medium hover:underline">سياسة الخصوصية</a>
        </p>
    </AuthLayout>
</>)
}

export default Login