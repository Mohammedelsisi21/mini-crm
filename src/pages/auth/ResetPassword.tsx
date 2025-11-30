import { Info, Lock } from "lucide-react"
import FormTitle from "../../components/form/FormTitle"
import AuthLayout from "../../layouts/AuthLayout"
import Label from "../../components/common/Label"
import Input from "../../components/common/Input"
import MsgError from "../../components/common/MsgError"
import { useForm } from "react-hook-form"
import type { IDataResetPassword } from "../../interfaces"
import Button from "../../components/common/Button"
import { ResetPasswordSchema } from "../../validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import PasswordRules from "../../components/form/PasswordRules"
import CardAuth from "../../components/common/CardAuth"

const ResetPassword = () => {
  const [password, setPassword] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        } = useForm<IDataResetPassword>({
            resolver: yupResolver(ResetPasswordSchema),
        })

    useEffect(() => {
        const subscription = watch((value) => {
            setPassword(value.password || "");
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const rules = {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    };


    const onSubmit = handleSubmit((data) => console.log(data))

return (<>
    <AuthLayout w="md:min-w-sm">
        <FormTitle
        background = "gradient-primary"
        icon={<Lock size={36} className="text-white"/>}
        title="إنشاء كلمة مرور جديدة"
        des="اختر كلمة مرور قوية لحماية حسابك"/>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
            <div>
                <Label htmlFor="password" text="كلمة المرور الجديدة"/>
                <Input {...register("password")} type="password" name="password" id="password" error={!!errors.password} pl="pl-12" pass placeholder="أدخل كلمة المرور الجديدة" icon={<Lock size={24}/>}/>
                <MsgError error={errors.password?.message}/>
                <CardAuth
                bg="bg-primary-50"
                backgroundIcon="gradient-primary"
                icon={<Info size={16} className="text-white"/>}
                title="تتبع التعلمات"
                des={
                    <PasswordRules length={rules.length} upper={rules.upper} number={rules.number} special={rules.special}/>
                }/>
            </div>
            <div>
                <Label htmlFor="confirmPassword" text="تأكيد كلمه المرور"/>
                <Input {...register("confirmPassword")} type="password" name="confirmPassword" id="confirmPassword" pl="pl-12" error={!!errors.confirmPassword} pass placeholder="تأكيد كلمه المرور" icon={<Lock size={24}/>}/>
                <MsgError error={errors.confirmPassword?.message}/>
            </div>
            <Button ariaLabel="login-btn" type="submit">
                <Link to={'/login'}>إعاده تعيين كلمة المرور</Link>
            </Button>
        </form>
    </AuthLayout>
</>)
}

export default ResetPassword