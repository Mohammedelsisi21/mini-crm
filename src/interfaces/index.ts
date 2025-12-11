
//** Register */
export interface IDataRegister {
    username: string
    email: string
    phone: string
    companyName: string
    password: string
    confirmPassword: string
    acceptTerms: boolean
}

//** Login */
export interface IDataLogin  {
    email: string
    password: string
}

// * ConformPass */

export interface IDataForgetPassword {
    email: string
}
export interface IDataResetPassword {
    password: string
    confirmPassword: string
}


//** Create Customer */
export interface ICustomer {
    username: string
    email: string
    phone: string
    status: string
    classification: string
}
