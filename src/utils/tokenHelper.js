import Jwt from "jsonwebtoken";
export const tokenHelper={
    sign:(payload, secretkey,options={})=>{
        try {
    return Jwt.sign(payload,secretkey,options)
    
} catch (error) {
    console.log(error.message);
}
    },
    verify:(token,secretkey)=>{
        try {
         return Jwt.verify(token,secretkey);   
        } catch (error) {
            console.log('jwt error-->'+error.message);
        }
    }
}