const yup = require("yup");

const RegisterFormValidation = yup.object().shape({
    firstname: yup.string("Please enter your First name").test('len', 'Firstname name must be exactly 2 characters atleast', val => val.length > 2).matches("^[a-zA-Z_ ]+$", "Please enter your First name").max(15, "First name must be less than 15 characters").required("Please enter your First name"),
    lastname: yup.string("Please enter your Last name").test('len', 'Last name must be exactly 2 characters atleast', val => val.length > 2).matches("^[a-zA-Z_ ]+$", "Please enter your Last name").max(15, "Last name must be less than 15 characters").required("Please enter your Last name"),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    email: yup.string()
        .matches(/^[A-Za-z0-9._%+-]+@bue.edu.eg$/, "Admin Email must be valid").required("Please enter Admin Email"),
});

export default RegisterFormValidation