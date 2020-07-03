export const validateEmail = (email, setError) => {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    
    if(re.test(email)) {
        return(true)
    } else {
        setError("Ingrese un email valido.")
    }
}

export const validatePassword = (password, setError) => {
    const re = /^.{5,20}/;

    if(re.test(password)) {
        return(true)
    } else {
        setError("La contraseña debe tener entre 5 y 20 digitos.")
    }
}

export const validateUsername = (username, setError) => {
    const re = /^.{2,15}/;

    if(re.test(username)) {
        return(true)
    } else {
        setError("El nombre debe tener entre 2 y 15 digitos.")
    }
}

export const validateAmount = (amount, setError) => {
    const re = /^(0*[1-9][0-9]*)$/;

    if(re.test(amount)) {
        return(true)
    } else {
        setError("El monto debe ser numerico y mayor a 0.")
    }
}