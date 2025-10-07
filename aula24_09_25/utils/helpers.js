export const isVAlidEmail = (email) => {
    if (!email) return false;
    //Uma expressão regular simples para chacar o formato do email. 
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
export const formatUserProfile = (user)=> {
    return `Nome: ${user.name}, Idade ${user.age}`;
};