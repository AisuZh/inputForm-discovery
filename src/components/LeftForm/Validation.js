const required_field = "required"

export const NamelValidation = {
    required: required_field,
    validate: (value) => {

        if (value.length < 3) {
            return 'Must be more than 3 symbols'
        } 
        return true;

    }
}

let validRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export const EmaillValidation = {
    required: required_field,
    validate: (value) => {
        if (value.match(validRegex)) {
            return true
        } else {
            return "Invalid email"
        }
    }
}

let validRegex2= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export const PasswordValidation = {
    required: required_field,
    validate: (value) => {
        if (value.match(validRegex2)) {
            return true
        } else {
            return "Minimum 8 English characters, at least 1 uppercase letter and one number."
        }
    }
}

export const TextAreaValidation ={
    required: required_field,
    validate: (value) => {
        if (value.length > 200) {
            return "Maximum 200 symbols"
        } 
        return true 
    }
}


