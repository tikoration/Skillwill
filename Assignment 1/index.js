

function isEqual(a, b){
    if(typeof a === typeof b){
        if(a === b){
        return "a is equal to b"
        }
    }
    return "a is not equal to b"
}

function fahrenToCels(fahrenheit){
    if(typeof fahrenheit !== 'number'){
        return false
    }
    const celsius = (fahrenheit - 32)*5/9
    return celsius
}

function calculator(a,b,operation){
    if(typeof a !== 'number' || typeof b !== "number"){
        return false
    }
    if(operation === '/'){
        return a/b
    }else if(operation === '*'){
        return a*b
    }else if(operation === "+"){
        return a+b
    }else if(operation === "-"){
        return a-b
    }
    return false
}

console.log(isEqual("12",12))
console.log(fahrenToCels(36))
console.log(calculator(12,2,'/'))

