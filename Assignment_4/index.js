// Task 1

const replaceFunc = (string, valueToReplace, valueToReplaceWith) => {
    const newStr = string.split(valueToReplace).join(valueToReplaceWith)
    return newStr
}

console.log(replaceFunc("I like flowers", "flowers", "plants"))

// Task 2

const upSentence = (string) => {
    const newStr = string.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    return newStr
}

console.log(upSentence("hello hello"))

// Task 3

const users = [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}]

const sortByAge = (arr) => {
    const sorted = arr.sort((a,b) => a.age - b.age)
    return sorted
}

console.log(sortByAge(users))