export const checkValidData = (email,password) => {
    
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

    // if(name.length < 3){
    //     return "Name is not valid";
    // }
    
    if(!isEmailValid){
        return "Email ID is not valid";
    }

    if(!isPasswordValid){
        return "Password is not valid";
    }

    

    return null;

};


