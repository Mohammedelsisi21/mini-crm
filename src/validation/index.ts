import * as yup from "yup";

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
