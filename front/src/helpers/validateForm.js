export const validateForm = (fieldName, value) => {
    let error = ''
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[0-2])[\/\-]\d{4}$/


    switch(fieldName) {
        case 'name': 
            if (!value.trim()) {
                error = 'Full name is required'
            }
            break

        case 'email': 
            if (!value.trim()) {
                console.log(value)
                error = 'Email is required'
            } else if (!emailRegex.test(value)) {
                error ='Invalid email address'
            }
            break

        case 'birthdate':
            if (!value.trim()) {
                error = 'Date of birth is required';
            } else if (dateRegex.test(value)) {
                error = 'The date format is incorrect. It should be: year/month/day.'
            }
            break
        
        case 'nDni':
            if (!value) {
                error = 'ID number is required';
            }
            break

        case 'username': 
            if (!value.trim()) {
                error = 'Username is required'
            }
            break

        case 'password': 
            if (!value.trim()) {
                error = 'Password is required'
            } else if (!passwordRegex.test(value)) {
                error = 'The password must be at least 8 characters long and contain at least one letter and one digit.'
            }
            break
        
        default:
            break
    }
    return error
}