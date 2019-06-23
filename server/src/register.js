import dbUser from "../model/user";
import bcrypt from "bcrypt";

const saltRounds = 10;

const register = async (info) => {
    const userExists = await dbUser.findOne({userName: info.userName});
    if (userExists){
        return {
            success: false,
            msg: 'userName has already existed'
        }
    }
    info.password = await bcrypt.hash(info.password, saltRounds);
    const newUser = new dbUser(info);
    await newUser.save();
    return {
        success: true,
        data: newUser
    }
}

export default register;