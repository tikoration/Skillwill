const users = [{ name: 'Temo', age: 25 }, { name: 'Lasha', age: 21 }, { name: 'Ana', age: 28 }]

// Task 1

function youngest(){
    let age = 100;
    let user;
    for(let i=0; i < users.length;i++){
        if(users[i].age < age){
            age = users[i].age
            user = users[i].name
        }
    }
    return user
}

console.log(youngest())

// Task 2

function newObj(user){
    let user2 = {}
    for(const key in user){
       user2[key] = user[key]
    }
    return user2
}

const newUsers = users.map(user => newObj(user))

console.log(newUsers)

// Task 3

function dice(){
    let a = 0
    let b = 0
    let acounter = 0
    let bcounter = 0
    while(a !== 3){
        a = parseInt(Math.random()*12) + 1
        acounter++
    }
    while(b !== 3){
        b = parseInt(Math.random()*12)+1
        bcounter++
    }
    if(acounter < bcounter){
        return "a is the winner"
    }else if(bcounter < acounter){
        return "b is the winner"
    }else{
        return 'it\'s a tie!'
    }

}

console.log(dice())
