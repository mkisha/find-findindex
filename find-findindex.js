const arr = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  /*findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
  findUserByUsername(users, 'taco') // undefined */


  function findUserByUsername(arr, str) {

  return  arr.find(function(val){
        return val.username === str;
    })
  }






  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  /*removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined */

  function removeUser(arr, str) {

    let idx = arr.findIndex(function(val){

        return val.username === str;
    })

    if (idx === -1) {
        return;

    }

    else {

        return arr.splice(idx, 1)[0];
    }
  }