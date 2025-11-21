import * as yup from "yup";


// ** LoginSchema
export const RegisterSchema = yup.object().shape({
    fristName: yup
    .string()
    .required("الاسم مطلوب")
    .matches(/^[a-zA-Z\u0600-\u06FF\s]{3,}$/, "يجيب ان يكون الاسم اكثر من 3 حروف عل الاقل"),

    email: yup
    .string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب")
    .matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "البريد الإلكتروني غير صالح"
    ),

    phone: yup
    .string()
    .required("رقم الهاتف مطلوب")
    .matches(/^01[0|1|2|5][0-9]{8}$/, "رقم الهاتف غير صالح"),

    companyName: yup
    .string()
    .required("اسم الشركة مطلوب")
    .matches(/^[a-zA-Z\u0600-\u06FF0-9&\-\s]{3,}$/, "اسم الشركة غير صالح"),

    password: yup
    .string()
    .required("كلمة المرور مطلوبة")
    .matches(/^(?=.*[A-Z])/, "يجب أن تحتوي على حرف كبير واحد")
    .matches(/^(?=.*[0-9])/, "يجب أن تحتوي على رقم واحد")
    .matches(/^(?=.*[!@#$^&_/-/,<>?])/, "يجب أن تحتوي على رمز خاص واحد")
    .min(8, "يجب أن تكون 8 أحرف على الأقل"),

    confirmPassword: yup
    .string()
    .required("تأكيد كلمة المرور مطلوبة")
    .oneOf([yup.ref("password")], "كلمتا المرور غير متطابقتين"),

    acceptTerms: yup
    .boolean()
    .required("يجب الموافقة على الشروط والأحكام")
    .oneOf([true], "يجب الموافقة على الشروط والأحكام")

});

// ** LoginSchema
export const LoginSchema = yup.object().shape({
    email: yup
    .string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب")
    .matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "البريد الإلكتروني غير صالح"
    ),
    password: yup
    .string()
    .required("كلمة السر مطلوبة")
    .min(8, "يجب أن تحتوي كلمة السر على 8 أحرف على الأقل"),
});


