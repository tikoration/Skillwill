// Task 1

const mySetTimeout = (delay) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

// Task 2

// .then().catch() method

function makeToys() {
    return new Promise((resolve, reject) => {
        // timer added
        mySetTimeout(3000).then(() => {
            if (Math.random() > 0.1) {
                resolve("Toy was undefected")
            } else {
                reject("Toy was defected")
            }
        })
    })
  }

  function sellToys(status) {
    return new Promise((resolve, reject) => {
        // timer added
        mySetTimeout(1000).then(() => {
            if (status === "Toy was undefected"){
                if (Math.random() > 0.5){
                  resolve("Toy sold")
                } else {
                  reject("Toy did not sell")
                }
            }
        })
    })
  }

//   new delivery step added
function deliverToys(stat){
    return new Promise((resolve,reject) => {
        mySetTimeout(2000).then(() => {
            if(stat === 'Toy sold'){
                if(Math.random() > 0.4){
                    resolve("Toy was delivered successfully!")
                } else{
                    reject("Delivery failed")
                }
            } 
        })
    })
}

  makeToys()
    .then((status) => sellToys(status))
    // adding delivery step
    .then((stat) => deliverToys(stat))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// async/await

async function makeToysAsync() {
    await mySetTimeout(3000)
    if (Math.random() > 0.1) {
        return "Toy was undefected"
    } else {
        return "Toy was defected"
    }
  }

async function sellToysAsync(status) {
    await mySetTimeout(1000)
    if (status === "Toy was undefected") {
        if (Math.random() > 0.5) {
            return "Toy sold"
        } else {
            return "Toy did not sell"
        }
    } else {
        return "Toy was defected"
    }
  }

async function deliverToysAsync(status){
    await mySetTimeout(2000)
    if(status === 'Toy sold'){
        if(Math.random() > 0.4){
            return "Toy was delivered successfully!"
        } else{
            return "Delivery failed"
        }
    } else {
        return "Toy did not sell"
    }
}

async function promisify(){
    try {
        const status = await makeToysAsync()
        const sellStatus = await sellToysAsync(status)
        const deliveryStatus = await deliverToysAsync(sellStatus)
        console.log(deliveryStatus)
    } catch (error) {
        console.log(error)
    }
}
promisify()
