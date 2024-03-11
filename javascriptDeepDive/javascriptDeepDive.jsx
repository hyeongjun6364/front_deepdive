//객체의 가변성에 따른 문제점
var user ={
    name: 'Jaenam',
    gender: 'male',
}
var changeName = function(user, newName){
    return {
        name:newName,
        gender:user.gender,
    }
};

var user2 = changeName(user, 'lhj')

if (user!==user2){
    console.log("user information change");
}

console.log(user.name, user2.name);
console.log(user,user2);