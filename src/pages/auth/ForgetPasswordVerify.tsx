import { Info, Mail } from "lucide-react"
import FormTitle from "../../components/form/FormTitle"
import AuthLayout from "../../layouts/AuthLayout"
import CardAuth from "../../components/common/CardAuth"
import Label from "../../components/common/Label"
import InputCode from "../../components/form/InputCode"

const ForgetPassword = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     } = useForm<IDataForgetPassword>({
    //         resolver: yupResolver(ForgetPasswordSchema),
    //     })

    // const onSubmit = handleSubmit((data) => console.log(data))

return (<>
    <AuthLayout w="md:min-w-sm">
        <FormTitle
        background = "gradient-primary"
        icon={<Mail size={36} className="text-white"/>}
        title="تحقق من بريدك الإلكتروني"
        des="أدخل الكود المكون من 6 أرقام الذي أرسلناه إلى:"/>
        <form className="space-y-5 font-main">
          <div className="mt-6">
            <Label text="كود التحقق" center="text-center"/>
            <div className="flex gap-3 justify-center ltr">
              <InputCode />
              <InputCode />
              <InputCode />
              <InputCode />
              <InputCode />
              <InputCode />
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