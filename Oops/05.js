//Arror functions : Arrow function does not have this instead it takes this from its surrounding (one level above) and we cannot change the this of arrow function

    
const user1 = {
    firstName : "Manoranjan",
    age : 22,
    about: () => {
        console.log(this.firstName, this.age)
    }
}

user1.about(); // undefined undefined (bcz here due to arrow function this keyword takes window as its object)

user1.about.call(user1); //undefined undefined (bcz we cannot change the this in arrow function)