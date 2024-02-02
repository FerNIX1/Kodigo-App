const EmailValidation={
    value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message:"Invalid addres"
};

 const MinPassword={
    value:8,
    message:"Password must be al least 8 characters"
};
 const MaxPassword={
    value:24,
    message:"Password must be less than 24 characters"
};

const PhoneValidation={
    value:/^(\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/,
    message:"El número de teléfono debe tener al menos 8 dígitos y máximo 11, con el formato 0000-0000 o 000-0000-0000"
};
export {EmailValidation,MaxPassword,MinPassword, PhoneValidation};