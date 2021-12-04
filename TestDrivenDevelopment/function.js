const functions = {
    add: (num1,num2)=> num1 + num2,
    isNull:()=>{
        return null
    },
    checkValue:(x)=>x,
    createUser:()=>{
        const user = {'firstName':"Uche"};
        user['lastname'] = 'Traversy';
        return user;
    }
}

/* 
CHECK FOR TRUTHY AND FALSY VALUES
- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opppsite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false


*/
module.exports = functions;