import { Lock, Mail } from "lucide-react"
import FormTitle from "../../components/form/FormTitle"
import AuthLayout from "../../layouts/AuthLayout"
import Label from "../../components/common/Label"
import Input from "../../components/common/Input"
import MsgError from "../../components/common/MsgError"
import { useForm } from "react-hook-form"
import type { IDataForgetPassword } from "../../interfaces"
import Button from "../../components/common/Button"
import { ForgetPasswordSchema } from "../../validation"
import { yupResolver } from "@hookform/resolvers/yup"
import AuthLink from "../../components/common/AuthLink"

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
    <AuthLayout w="lg:min-w-md">
        <FormTitle
        background = "gradient-primary"
        icon={<Lock size={40} className="text-white"/>}
        title="نسيت كلمة المرور؟"
        des="لا تقلق. سنرسل لك رابط لإعادة تعيين كلمة المرور"/>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
            <div>
                <Label  text="البريد الإلكتروني"/>
                <Input {...register("email")} type="email" name="email" pl="pl-4" error={!!errors.email} placeholder="أدخل بريدك الإلكتروني" icon={<Mail size={24}/>}/>
                <MsgError error={errors.email?.message}/>
            </div>
            <Button ariaLabel="login-btn" type="submit">
                <span>إرسال رابط إعاده التعيين</span>
            </Button>
            <AuthLink textSize="text-md" url="/login" text={"العوده لتسجيل الدخول"} algin={"text-center"} color="text-primary-500" hover="hover:text-primary-700"/>
        </form>
    </AuthLayout>
</>)
}

export default ForgetPassword