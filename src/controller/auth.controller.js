import { readFile } from "../lib/reader.js";
import { tokenHelper } from "../utils/tokenHelper.js";
const users=readFile('users.json')
export const signIn=(req,res)=>{
try {
    const user=users.find(u=>u.email==req.body.email&&u.password==req.body.password)
    if(!user)return res.status(400).json({status:400,data:null,msg:'user topilmadi!'});
const token=tokenHelper.sign({id:user.id, email:user.email, password:user.password}, process.env.SECRET_KEY);
res.status(200).json({status:200, token, msg:'succsesfully giving token'})
} catch (error) {
    console.log(error.message);
}
}