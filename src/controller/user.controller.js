import { readFile, writeFile } from "../lib/reader.js"
import { tokenHelper } from "../utils/tokenHelper.js";
const users=readFile('/users.json');
export const registUser=(req, res)=>{
    try {
        const {user_name, email, password}=req.body;
        console.log(req);
        if(users.some(u=>u.email==email))return res.status(403).json({status:403, data:email, msg:"ushbu email allaqachon ro'yatdan o'tgan!"});
        users.push({user_id:users.at(-1)?.user_id+1||1, user_name, email, password});
        writeFile('/users.json', users);
        res.status(200).json({status:200, data:{user_name,email}, msg:'successfully register!'});
    } catch (error) {
        console.log(error.message);
    }
}
export const getUser=(req, res)=>{
 try {
    const {token} = req.headers;
    const {email, password}=tokenHelper.verify(token, process.env.SECRET_KEY);
     const user=users.find(u=>u.email==email&&u.password==password);
     if(!user)return res.status(400).json({status:400, data: null, msg:'user not found!'});
     res.status(200).json({status:200, data:user, msg:'ok'});
 } catch (error) {
    console.log(error.message);
 }

}