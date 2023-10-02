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


 function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user) {
    return user.username === username;
  });
 } 

 /* let arr = [
    { name:"username", value:"mlewis" },
    { name:"username", value:"akagen" },
    { name:"username", value:"msmith" }
];

let obj = arr.find(o => o.name === 'username');

console.log(obj);

let arr = [
    { name:"username", value:"mlewis" },
    { name:"username", value:"akagen" },
    { name:"username", value:"msmith" }
];

let obj = arr.find((o, i) => {
    if (o.name === 'username') {
        arr[i] = { name: 'username', value: 'mlewis' };
        return true; // stop searching
    }
});

console.log(arr);
*/ 


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

 /* for (var i = 0; i < arrayOfObjects.length; i++) {
    var obj = arrayOfObjects[i];

    if (listToDelete.indexOf(obj.id) !== -1) {
        arrayOfObjects.splice(i, 1);
    }
}

for (var i = 0; i < arrayOfObjects.length; i++) {
    var obj = arrayOfObjects[i];

    if (listToDelete.indexOf(obj.id) !== -1) {
        arrayOfObjects.splice(i, 1);
        i--;
    }
}

var end = 0;

for (var i = 0; i < arrayOfObjects.length; i++) {
    var obj = arrayOfObjects[i];

    if (listToDelete.indexOf(obj.id) === -1) {
        arrayOfObjects[end++] = obj;
    }
}

arrayOfObjects.length = end;

const setToDelete = new Set(listToDelete);
let end = 0;

for (let i = 0; i < arrayOfObjects.length; i++) {
    const obj = arrayOfObjects[i];

    if (setToDelete.has(obj.id)) {
        arrayOfObjects[end++] = obj;
    }
}

arrayOfObjects.length = end;


const filterInPlace = (array, predicate) => {
    let end = 0;

    for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        if (predicate(obj)) {
            array[end++] = obj;
        }
    }

    array.length = end;
};

const toDelete = new Set(['abc', 'efg']);

const arrayOfObjects = [{id: 'abc', name: 'oh'},
                        {id: 'efg', name: 'em'},
                        {id: 'hij', name: 'ge'}];

filterInPlace(arrayOfObjects, obj => !toDelete.has(obj.id));
console.log(arrayOfObjects);
*/