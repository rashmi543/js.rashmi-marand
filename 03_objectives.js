const mySym = Symbol("key1")

const Jsuser = {
    name: "Rashmi",
    "full name": "Rashmi Marand",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "rashmi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mySym])

Jsuser.email = "Rashmi@chatgpt.com"
console.log(Jsuser.email)

Object.freeze(Jsuser)

// aa change work nahi kare
Jsuser.email = "Rashmi@microsoft.com"

console.log(Jsuser)