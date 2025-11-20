import Input from "../../components/common/Input";
import Label  from "../../components/common/Label";
import AuthLayout from "../../layouts/AuthLayout";
import FormTitle from "../../components/form/FormTitle";
import Checkbox from "../../components/common/Checkbox";
import AuthLink from "../../components/common/AuthLink";
import Button from "../../components/common/Button";
import { ArrowLeft, Award, Lock, Mail } from "lucide-react";
import GoogleIcon from "../../icons/GoogleIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import SocialButton from "../../components/common/SocialButton";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup"
import MsgError from "../../components/common/MsgError";


type FormData = {
    email: string
    password: string
}
const Register = () => {
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
        background = "gradient-secondary"
        icon={<Award size={40} className="text-white"/>}
        title="إنشاء حساب جديد"
        des="ابدأ رحلتك مع أفضل نظام CRM"/>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
            <div>
                <Label  text="البريد الإلكتروني"/>
                <Input {...register("email")} type="email" name="email" pl="pl-4" error={!!errors.email} placeholder="أدخل بريدك الإلكتروني" icon={<Mail size={24}/>}/>
                <MsgError error={errors.email?.message}/>
            </div>
            <div>
                <Label  text="كلمة المرور"/>
                <Input {...register("password")} type="password" name="password" error={!!errors.password} pl="pl-12" pass placeholder="أدخل أدخل كلمة المرور" icon={<Lock size={24}/>}/>
                <MsgError error={errors.password?.message}/>
            </div>
            <div className="flex items-center justify-between font-main">
                <Checkbox text="تذكرني"/>
                <AuthLink text="نسيت كلمة المرور؟"/>
            </div>
            <Button variant="secondary" ariaLabel="login-btn" type="submit">
                <span>إنشاء الحساب</span>
                <ArrowLeft size={20} className="group-hover:translate-x-1 transition-transform" />
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
            <a href="#" className="text-primary-600 font-medium hover:underline">شروط الخدمة</a>
            {' '}و{' '}
            <a href="#" className="text-primary-600 font-medium hover:underline">سياسة الخصوصية</a>
        </p>
    </AuthLayout>
</>)
}

export default Register