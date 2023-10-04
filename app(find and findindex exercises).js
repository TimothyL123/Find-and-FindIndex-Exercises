/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


let arr = { 
    name:"username", value:"mlewis",
    name:"username", value:"akagen",
    name:"username", value:"msmith",
};

let object = arr.find(o => o.name === username);

console.log(obj);

let obj = arr.find((o, i) => {
    if (o.name === username) {
        arr[i] = { name: username, value: mlewis };
        return true; // stop searching
    }
});

console.log(arr);

function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user) {
    return user.username === username;
  });
 } 


  /*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

 function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
 }


  for (var i = 0; i < arrayOfObjects.length; i++) {
    var arrayOfObjects = arrayOfObjects[i];

    if (listToDelete.indexOf(obj.id) !== -1) {
        arrayOfObjects.splice(i, 1);
    }
}
