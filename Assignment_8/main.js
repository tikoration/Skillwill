// Task 1 

const expo = (number, power, callback) => { 
    if(power === 0) return 1 
    return callback(number, expo(number, power - 1, callback), callback)
} 

console.log(expo(3,4,(a,b) => a*b)) 

// Task 2 

const divEl = document.querySelector(".users")

fetch('https://jsonplaceholder.typicode.com/posts') 
.then(res => res.json()) 
.then(data => {
    data.forEach(el => {
        const element = document.createElement('div')
        element.innerHTML = `
            <h2>${el.title}</h2>
            <h3>${el.body}</h3>`
        divEl.appendChild(element)
    })
}) 

// Task 3 

const cloneObj = (obj) => {
    const newObj = {}
    for(let key in obj){
        // checking if obj is something to loop over again,
        // if not copying it to newObj
        if(typeof obj[key] !== "object" || obj[key] === null){
            newObj[key] = obj[key]
        } else {
            // checking if its an array and mapping over it
            if(Array.isArray(obj[key])){
                newObj[key] = obj[key].map((el) => {
                    // checking if array has object or array that
                    // needs recursion
                    if(typeof el !== "object"){
                        return el
                    } else {
                        return cloneObj(el)
                    }
                })
            }else {
                // for objects
                newObj[key] = cloneObj(obj[key])
            }
        }
    }
    return newObj
 } 
 
 const deepCopy = (obj) => { 
    return new Promise((resolve, reject) => { 
        if(typeof obj === "object"){  
            resolve(cloneObj(obj)) 
        }else{ 
            reject("This is not an object") 
        } 
    }) 
} 

const example = {
    animal: "cat",
    city: "Tbilisi", 
    array: ["array", "of", "things"], 
    object: {
        color: "red",
        shape: "circle",
        anotherObj: {
            what: "else",
            should: "I",
            write: "?"
        }
    },
    lets: [
        {try: 'this'},
        {version: "shall"},
        {we: "?"}
    ]
}

deepCopy(example)
.then((res) => console.log(res)) 
.catch((err) => console.log(err))