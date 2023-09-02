// prob 1. Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not.

const allUsers = [
    "Pritam",
    "Kamlesh",
    "Samdarshi",
    "Mithun",
    "Vivek",
    "Manish",
    "Pappu",
    "Prakash",
];

function isUserPresent(user) {
    if (allUsers.includes(user)) {
        console.log(`Yes, ${user} is a valid user.`);
        return true;
    } else {
        console.log(`No ${user} is not a valid user`);
        return true;
    }
}

isUserPresent("Mithun");
// Output: Yes, Mithun is a valid user.

isUserPresent("Someone");
// Output: No Someone is not a valid user