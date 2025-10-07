import {users } from "../data/databases"
export const findUserById = (id) => {
 const userData = users.find((u)=> u.id === id);

 if (userData  && isVAlidEmail (userData.email)) {
    return userData;
 }
 return undefined;
}