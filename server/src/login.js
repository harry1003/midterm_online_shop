import dbUser from "../model/user";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const secret = 'test123';

const login = async (info) => {
    const user = await dbUser.findOne({userName: info.userName});
    if (!user) return {success:false, msg:"No such user!"};
    const compare = await bcrypt.compare(user.password, info.password);
    if (!compare) {
        return {
            sucess: false,
            msg: 'password is wrong'
        }
    }
    else {
        return {
            success: true,
            token: jwt.sign({data:info.userName}, secret, {expiresIn: '1h'}),
            userId: user._id
        }
    }
}

export default login;