import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import FormTitle from "../../components/form/FormTitle";
import { ArrowLeft, Info, Mail } from "lucide-react";
import Label from "../../components/common/Label";
import InputCode from "../../components/form/InputCode";
import AuthLink from "../../components/auth/AuthLink";
import CardAuth from "../../components/auth/CardAuth";


const VerifyCode = () => {
  const navigate = useNavigate()
  const [timer, setTimer] = useState<number>(60);
  const [isComplete, setIsComplete] = useState(false)
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

  //** Check Complete */
  const checkComplete = () => {
    const values = [
      c1.current?.value,
      c2.current?.value,
      c3.current?.value,
      c4.current?.value,
      c5.current?.value,
      c6.current?.value,
    ]
    setIsComplete(values.every((v) => v && v.trim() !== ""))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      const code =
        (c1.current?.value || "") +
        (c2.current?.value || "") +
        (c3.current?.value || "") +
        (c4.current?.value || "") +
        (c5.current?.value || "") +
        (c6.current?.value || "");
    if(code === "123456") {
      toast.success("كود صحيح")
      navigate("/resetPassword")
    }
    else{
      toast.error("كود غير صحيح")
    }
  }
return (<>
    <AuthLayout w="md:min-w-sm">
        <FormTitle
        background = "bg-gradient-primary"
        icon={<Mail size={36} className="text-white"/>}
        title="تحقق من بريدك الإلكتروني"
        des="أدخل الكود المكون من 6 أرقام الذي أرسلناه إلى:"/>
        <p className="text-center text-primary-500">example@email.com</p>
        <form className="space-y-5 font-main" onSubmit={onSubmit}>
          <div className="mt-6">
            <Label text="كود التحقق"/>
            <div className="flex gap-3 justify-center ltr">
              <InputCode ref={c1} next={c2} onKeyUp={checkComplete}/>
              <InputCode ref={c2} next={c3} prev={c1} onKeyUp={checkComplete}/>
              <InputCode ref={c3} next={c4} prev={c2} onKeyUp={checkComplete}/>
              <InputCode ref={c4} next={c5} prev={c3} onKeyUp={checkComplete}/>
              <InputCode ref={c5} next={c6} prev={c4} onKeyUp={checkComplete}/>
              <InputCode ref={c6} prev={c5} onKeyUp={checkComplete}/>
            </div>
          </div>
          <button
            disabled={!isComplete}
            className={`mt-4 px-6 w-full py-2 rounded-xl text-white font-semibold transition
            ${isComplete ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400 cursor-not-allowed"}`}>
              التحقق من الكود
          </button>
        </form>
        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center items-center flex-col space-y-1 font-main">
          <p className="text-center text-text-heading text-sm">لم تستلم الكود؟</p>
          <button type="button"
          disabled={timer > 0}
          className={`text-sm ${timer > 0 ? "text-gray-400 cursor-not-allowed" : "text-primary-600 hover:underline"}`}
          onClick={()=> setTimer(60)}>
            إعادة إرسال الكود
          </button>
          {timer > 0
          && <p className="text-sm">
            يمكنك إعادة الإرسال بعد{" "}
          <span className={`text-primary-600 font-bold`}>{timer}</span> ثانية
          </p>
          }
          <AuthLink textSize="text-md" url="/login" icon={<ArrowLeft size={18} className="group-hover:translate-x-1 transition-transform"/>} text={"العوده لتسجيل الدخول"} algin={"text-center"} color="text-primary-500" hover="hover:text-primary-700"/>
        </div>
        <CardAuth
        bg="bg-primary-100"
        icon={<Info size={16} className="text-white"/>}
        backgroundIcon="gradient-primary"
        title="نصيحة أمنية"
        des="الكود صالح لمدة 10 دقائق فقط. لا تشارك هذا الكود مع أي شخص."/>
    </AuthLayout>
</>)
}

export default VerifyCode