import Input from "../../components/common/Input";
import Label  from "../../components/common/Label";
import AuthLayout from "../../layouts/AuthLayout";
import FormTitle from "../../components/form/FormTitle";
import Checkbox from "../../components/common/Checkbox";
import AuthLink from "../../components/common/AuthLink";
import Button from "../../components/common/Button";
import {ArrowRight, Award, Building2, Lock, Mail, Phone, User } from "lucide-react";
import GoogleIcon from "../../icons/GoogleIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import SocialButton from "../../components/common/SocialButton";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup"
import MsgError from "../../components/common/MsgError";
import { useEffect, useState } from "react";
import PasswordRules from "../../components/form/PasswordRules";
import type { IDataRegister } from "../../interfaces";


const Register = () => {
    const [password, setPassword] = useState("")
    const { register, handleSubmit, watch, formState: { errors }} = useForm<IDataRegister>({
            resolver: yupResolver(RegisterSchema),
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
    <AuthLayout w="lg:min-w-5xl">
        <FormTitle
        background = "gradient-secondary"
        icon={<Award size={40} className="text-white"/>}
        title="إنشاء حساب جديد"
        des="ابدأ رحلتك مع أفضل نظام CRM"/>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <Label  text="الاسم" />
                    <Input {...register("fristName")} type="text" name="fristName" pl="pl-4" error={!!errors.fristName} placeholder="أحمد" icon={<User size={24}/>}/>
                    <MsgError error={errors.fristName?.message}/>
                </div>
                <div>
                    <Label  text="البريد الإلكتروني"/>
                    <Input {...register("email")} type="email" name="email" pl="pl-4" error={!!errors.email} placeholder="أدخل بريدك الإلكتروني" icon={<Mail size={24}/>}/>
                    <MsgError error={errors.email?.message}/>
                </div>
                <div>
                    <Label  text="رقم الهاتف"/>
                    <Input {...register("phone")} type="tel" name="phone" pl="pl-4" error={!!errors.phone} placeholder="010 | 011 | 012 | 015" icon={<Phone size={24}/>}/>
                    <MsgError error={errors.phone?.message}/>
                </div>
                <div>
                    <Label  text="اسم الشركة"/>
                    <Input {...register("companyName")} type="text" name="companyName" pl="pl-4" error={!!errors.companyName} placeholder="اسم شركتك" icon={<Building2 size={24}/>}/>
                    <MsgError error={errors.companyName?.message}/>
                </div>
                <div>
                    <Label  text="كلمة المرور"/>
                    <Input {...register("password")} type="password" name="password" error={!!errors.password} pl="pl-12" pass placeholder="أدخل أدخل كلمة المرور" icon={<Lock size={24}/>}/>
                    <MsgError error={errors.password?.message}/>
                    <PasswordRules length={rules.length} upper={rules.upper} number={rules.number} special={rules.special}/>
                </div>
                <div>
                    <Label  text="تأكيد كلمه المرور"/>
                    <Input {...register("confirmPassword")} type="password" name="confirmPassword" pl="pl-12" error={!!errors.confirmPassword} pass placeholder="تأكيد كلمه المرور" icon={<Lock size={24}/>}/>
                    <MsgError error={errors.confirmPassword?.message}/>
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-1 font-main">
                    <Checkbox {...register("acceptTerms")} text="أوافق على "/>
                    <p className="text-center text-sm text-gray-500 ">
                        <a href="#" className="text-secondary-600 font-medium hover:underline">الشروط والأحكام</a>
                        {' '}و{' '}
                        <a href="#" className="text-secondary-600 font-medium hover:underline">سياسة الخصوصية</a>
                    </p>
                </div>
                <MsgError error={errors.acceptTerms?.message}/>
            </div>
            <Button variant="secondary" ariaLabel="login-btn" type="submit">
                <span>إنشاء الحساب</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="mt-8 text-center">
                <p className="text-text-body flex justify-center space-x-1">
                    لديك حساب بالفعل؟ {' '}
                    <AuthLink url="/login" text="سجل دخولك" color="text-secondary-700" hover="hover:text-secondary-800"/>
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
    </AuthLayout>
</>)
}

export default Register