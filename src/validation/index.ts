import * as yup from "yup";


// ** RegisterSchema
export const RegisterSchema = yup.object().shape({
    username: yup
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

// ** ForgetPasswordSchema
export const ForgetPasswordSchema = yup.object().shape({
    email: yup
    .string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب")
    .matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "البريد الإلكتروني غير صالح"
    ),
})


export const ResetPasswordSchema = yup.object().shape({
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
});

//** Customer */

export const CustomerSchema = yup.object().shape({
    username: yup
    .string()
    .required("الاسم مطلوب")
    .min(3, "يجيب ان يكون الاسم اكثر من 3 حروف علي الاقل"),

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

    category: yup
    .string()
    .required("تصنيف العميل مطلوب"),

    status: yup
    .string()
    .required("حالة العميل مطلوبة"),

});

//** Communication */

export const CommunicationSchema = yup.object().shape({
    username: yup
    .string()
    .required("الاسم مطلوب")
    .min(3, "يجيب ان يكون الاسم اكثر من 3 حروف علي الاقل"),

    employee: yup
    .string()
    .required("الاسم الموظف")
    .min(3, "يجيب ان يكون الاسم اكثر من 3 حروف علي الاقل"),


    description: yup
    .string()
    .required("وصف التواصل مطلوب")
    .min(4, "يجب ان يكون الوصف اكثر من 3 حروف"),

    contactType: yup
    .string()
    .required("نوع التواصل مطلوب"),

    status: yup
    .string()
    .required("حالة التواصل مطلوبة"),

});

//** Category */

export const CategorySchema = yup.object().shape({
    category: yup
    .string()
    .required("تصنيف مطلوب"),

});

//** Product */

export const ProductSchema = yup.object().shape({
    name: yup
    .string()
    .required("الاسم مطلوب")
    .min(3, "يجيب ان يكون الاسم اكثر من 3 حروف علي الاقل"),

    price: yup
    .number()
    .typeError("السعر يجب أن تكون رقمًا")
    .required("السعر مطلوب"),

    quantity: yup
    .number()
    .typeError("الكمية يجب أن تكون رقمًا")
    .required("الكمية مطلوب"),

    trend: yup
    .string()
    .required("الانتشار مطلوب"),

    change: yup
    .number()
    .typeError("التغيير يجب أن يكون رقمًا")
    .required("الكمية مطلوب"),

    status: yup
    .string()
    .required("حالة المنتج مطلوبة"),
});
