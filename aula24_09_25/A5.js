import {users } from ".data/database.js";
import { findUserById } from "./controllers/userController.js";
import { formatUserProfile } from "./utils/helpers.js";
const arrray = users;

console.log("Sistema de Usuários Inciado!");

const UserIdToFind = 2; 
const foundUser = findUserById(UserIdToFind);
if (foundUser) {
    console.log("Usuários Encontrado: ");
    console.log(formatUserProfile(UserIdToFind));
    
    
}else{
    console.log(`Usuário `);
    
}
