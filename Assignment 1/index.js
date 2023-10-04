
// Task 1
function isEqual(a, b){
    if(typeof a === typeof b){
        if(a === b){
        return "a is equal to b"
        }
    }
    return "a is not equal to b"
}

console.log(isEqual("12",12))

// Task 2
function fahrenToCels(fahrenheit){
    if(typeof fahrenheit !== 'number'){
        return false
    }
    const celsius = (fahrenheit - 32)*5/9
    return celsius
}

console.log(fahrenToCels(36))

// Task 3
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

console.log(calculator(12,2,'/'))

