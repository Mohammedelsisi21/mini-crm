import { Info, Mail } from "lucide-react"
import FormTitle from "../../components/form/FormTitle"
import AuthLayout from "../../layouts/AuthLayout"
import CardAuth from "../../components/common/CardAuth"
import Label from "../../components/common/Label"
import { useEffect, useRef, useState } from "react"
import InputCode from "../../components/form/InputCode"
// import InputCode from "../../components/form/InputCode"

const ForgetPassword = () => {
  const [timer, setTimer] = useState<number>(60);

 console.log(timer)

  const c1 = useRef<HTMLInputElement>(null);
  const c2 = useRef<HTMLInputElement>(null);
  const c3 = useRef<HTMLInputElement>(null);
  const c4 = useRef<HTMLInputElement>(null);
  const c5 = useRef<HTMLInputElement>(null);
  const c6 = useRef<HTMLInputElement>(null);


  //** Timar */

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => (t > 0 ?  t - 1 : 0))
    },1000)
    return () => clearInterval(interval)
  },[])

return (<>
    <AuthLayout w="md:min-w-sm">
        <FormTitle
        background = "gradient-primary"
        icon={<Mail size={36} className="text-white"/>}
        title="تحقق من بريدك الإلكتروني"
        des="أدخل الكود المكون من 6 أرقام الذي أرسلناه إلى:"/>
        <p className="text-center text-primary-500">example@email.com</p>
        <form className="space-y-5 font-main">
          <div className="mt-6">
            <Label text="كود التحقق"/>
            <div className="flex gap-3 justify-center ltr">
              <InputCode ref={c1} next={c2}/>
              <InputCode ref={c2} next={c3} prev={c1}/>
              <InputCode ref={c3} next={c4} prev={c2}/>
              <InputCode ref={c4} next={c5} prev={c3}/>
              <InputCode ref={c5} next={c6} prev={c4}/>
              <InputCode ref={c6} prev={c5}/>
            </div>
          </div>

        </form>
        <CardAuth
        bg="bg-primary-100"
        icon={<Info size={16} className="text-white"/>}
        backgroundIcon="gradient-primary"
        title="نصيحة أمنية"
        des="الكود صالح لمدة 10 دقائق فقط. لا تشارك هذا الكود مع أي شخص."/>
    </AuthLayout>
</>)
}

export default ForgetPassword