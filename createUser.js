function createUser(userName){
    let name=userName;

    return{

        getName(){
          return name;
        },
        setName(newName){
            name=newName;
        }
    }
}

let user=createUser("An");
console.log(user.getName());
user.setName("Duy");
console.log(user.getName());
