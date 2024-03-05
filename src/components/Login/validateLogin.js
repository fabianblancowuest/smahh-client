
const validateLogin = (inputs)=>{


    let errors = {}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*\d).{6,10}$/;

    if(!emailRegex.test(inputs.email)){
        errors.email= "The email format is not valid"
    }

    if(!passwordRegex.test(inputs.password) ){
        errors.password= "Password must contains at least one digit and has a length between 6 and 10 characters"
    }

    return errors
            
}

export default validateLogin