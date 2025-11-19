import { BiShield } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Input from "../../components/common/Input";
import Label  from "../../components/common/Label";
import AuthLayout from "../../layouts/AuthLayout";
import FormTitle from "../../components/form/FormTitle";
import PasswordInput from "../../components/common/PasswordInput";
import Checkbox from "../../components/common/Checkbox";
import AuthLink from "../../components/common/AuthLink";
import Button from "../../components/common/Button";

const Login = () => {
return (<>
    <AuthLayout>
        <FormTitle
        icon={<BiShield size={32} className="text-white"/>}
        title="مرحباً بعودتك"
        des="سجل دخولك للوصول إلى لوحة التحكم"/>
        <form className="space-y-5 font-main">
            <div>
                <Label  text="البريد الإلكتروني"/>
                <Input type="email" name="email" pl="pl-4" placeholder="أدخل بريدك الإلكتروني" icon={<CiMail size={20}/>}/>
            </div>
            <div>
                <Label  text="كلمة المرور"/>
                <PasswordInput />
            </div>
            <div className="flex items-center justify-between font-main">
                <Checkbox text="تذكرني"/>
                <AuthLink text="نسيت كلمة المرور؟"/>
            </div>
            <Button type="submit">
                <span>تسجيل الدخول</span>
                <BsArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                    <Button variant="outline" type="button">
                        <FcGoogle size={20}/>
                        <span>Google</span>
                    </Button>
                    <Button variant="outline" type="button">
                        <SiFacebook size={20} className="text-primary-500"/>
                        <span>Facebook</span>
                    </Button>
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