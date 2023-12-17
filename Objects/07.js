//objects inside array
//very usefull in real world application

const usersDetails = [
    {userID : 1, firstName: "Manoranjan", lastName: "Gupta", age:32},
    {userID : 2, firstName: "Soni", lastName: "Shaw", age:22},
    {userID : 3, firstName: "Ivanshika", lastName: "Gupta", age:1},
]

// console.log(userDetails)

//iteration we can do any which we use for array like for of loop, for in loop etc

for(let user of usersDetails) {
    // console.log(user);
    // if want to take only userID
    console.log(user.userID);
     // if want to take only first name
     console.log(user.firstName);
}