
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


//** Customer */
export interface ICustomer {
    username: string
    email: string
    phone: string
    status: string
    classification: string
}

//** cummunication */
export interface ICummunication {
    username: string
    contactType: string
    employee: string
    description: string
    status: string
}

//** Categiry */
export interface ICategory {
    classification: string
}
//** Product */
export interface IProduct {
    name: string
    price: number
    quantity: number
    trend: string
    change: number
    status: string
}
