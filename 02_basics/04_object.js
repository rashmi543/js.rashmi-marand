const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Kiran"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "Kiran@gmail.com",   // ✅ comma add karyo
    fullname: {
        userfullname: {
            firstname: "kiran",
            lastname: "marand"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = { obj1, obj2 }
console.log(obj3);
