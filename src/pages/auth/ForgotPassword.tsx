import { yupResolver } from "@hookform/resolvers/yup"
import { ArrowLeft, Lock, Mail, Shield } from "lucide-react"
import { useForm } from "react-hook-form"
import type { IDataForgetPassword } from "../../interfaces"
import { ForgetPasswordSchema } from "../../validation"
import AuthLayout from "../../layout/AuthLayout"
import FormTitle from "../../components/form/FormTitle"
import Label from "../../components/common/Label"
import Input from "../../components/common/Input"
import ErrorMessage from "../../components/common/ErrorMessage"
import Button from "../../components/common/Button"
import { Link } from "react-router-dom"
import AuthLink from "../../components/auth/AuthLink"
import CardAuth from "../../components/auth/CardAuth"

const ForgetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<IDataForgetPassword>({
            resolver: yupResolver(ForgetPasswordSchema),
        })

    const onSubmit = handleSubmit((data) => console.log(data))

return (<>
    <AuthLayout w="md:min-w-sm">
        <FormTitle
        background = "gradient-primary"
        icon={<Lock size={36} className="text-white"/>}
        title="نسيت كلمة المرور؟"
        des="لا تقلق. سنرسل لك رابط لإعادة تعيين كلمة المرور"/>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
            <div>
                <Label  text="البريد الإلكتروني"/>
                <Input {...register("email")} type="email" name="email" pl="pl-4" error={!!errors.email} placeholder="أدخل بريدك الإلكتروني" icon={<Mail size={24}/>}/>
                <ErrorMessage error={errors.email?.message}/>
            </div>
            <Button ariaLabel="login-btn" type="submit">
                <Link to={'/forgot-password/verify'}>إرسال رابط إعاده التعيين</Link>
            </Button>
            <AuthLink textSize="text-md" url="/login" icon={<ArrowLeft size={18} className="group-hover:translate-x-1 transition-transform"/>} text={"العوده لتسجيل الدخول"} algin={"text-center"} color="text-primary-500" hover="hover:text-primary-700"/>
        </form>
        <CardAuth
        bg="bg-primary-100"
        icon={<Shield size={16} className="text-white"/>}
        backgroundIcon="gradient-primary"
        title="نصيحة أمنية"
        des="سنرسل رابط إعادة التعيين إلى بريدك الإلكتروني. الرابط صالح لمدة 24 ساعة فقط."/>
    </AuthLayout>
</>)
}

export default ForgetPassword