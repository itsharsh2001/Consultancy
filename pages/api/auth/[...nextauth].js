import NextAuth from 'next-auth';
import dbConnect from '../../../lib/dbConnect.js'
import Providers from 'next-auth/providers'
import Users from '../../../models/users.js'
import bcrypt from 'bcryptjs';


export default NextAuth(
{
    session:{
        jwt:true,
    },
    providers:[
        Providers.Credentials({
            async authorize(credentials){
                dbConnect();

                var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                var valid = emailRegex.test(credentials.email);

                if(!valid){
                    throw new Error("Please Enter Valid Email" );
                }

                const checkUser = await Users.findOne({email:credentials.email})


                if(!checkUser){
                   throw new Error('User Not Found')
                }

                
                const checkVerified = checkUser.isverified;

                if(checkVerified){

               

                const Passwordmatch = await bcrypt.compare(credentials.password, checkUser.password);

                if (!Passwordmatch) {
                    throw new Error('invalid')
                }
                return {email: checkUser.email}

            }else{
                throw new Error('Please Verify your Email')
            }

            }
        })
    ]

}
);