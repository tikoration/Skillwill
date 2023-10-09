// Task 1

const calculate = (a,b,...arr) => {
    let sum = a + b
    let multiplied = 1
    if(arr.length > 0){
        for(i of arr){
            multiplied *= i
        }
    }else{
        multiplied = null
    }
    return [sum, multiplied]
    
}
console.log(calculate(1,4,5,7,8))

// Task 2

const user = {
    firstName: 'Tinatin',
    lastName: 'Mgebrishvili',
    banks: [
        {
            name: 'tbc',
            address: {
                city: 'Tbilisi',
                street: 'Vazha-pshavela ave'
            }
        },
        {
            name: 'bog',
            address: {
                city: 'Tbilisi',
                street: 'A.Kazbegi street'
            }
        },
        {
            name: 'bog',
            address: {
                city: 'Tbilisi',
                street: 'A.Kazbegi street'
            }
        }
    ]
}

const findCity = (user = []) => {
    const {banks: [{},{},{address: {city: city} = {}} = {}]} = user
    return city
}

console.log(findCity(user))

// Task 3

const obj = {
    firstName: "Tinatin",
    lastName: "Mgebrishvili",
    profile: {
        age: "26",
        sex: "female",
    },
    interests: ['painting', 'plants', 'crocheting']
}

const copyObj = (obj) => {
    const newObj = {
        ...obj, 
        profile: {...obj.profile},
        interests: [...obj.interests]
    }
    return newObj
}

console.log(copyObj(obj))