import classes from './SignUp.module.css'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin:auto;
  width:20px;
  height:20px;
  border-color: white;
  speedMultiplier: 1;
`;


async function createUser(name, email, password, phone) {
    const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            phone: phone
        }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'something went wrong')
    }

    return data;

}

const SignUp = () => {

    useEffect(() => {
        Router.prefetch('/otp')
    }, [])




    const Router = useRouter();
    const [signingUp, setSigning] = useState(false);
    let [color, setColor] = useState("#ffffff");


    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();


    async function signUpSuccessfully() {

        const enteredName = nameInputRef.current.value;
        const enteredemail = emailInputRef.current.value;
        const enteredphone = phoneInputRef.current.value;
        const enteredpassword = passwordInputRef.current.value;
        const enteredconfirmPassword = confirmPasswordInputRef.current.value;

        if (!enteredName || !enteredemail || !enteredphone || !enteredpassword || !enteredconfirmPassword) {
            setSigning(false);
            toast("Fill all the fields")
            return
        }

        try {
            setSigning(true);

            if (enteredpassword != enteredconfirmPassword) {
                toast("Password and Confirm Password are not matching")
                setSigning(false);
                return;
            }


            const result = await createUser(enteredName, enteredemail, enteredpassword, enteredphone)

            localStorage.setItem('email', enteredemail);
            localStorage.setItem('phone', enteredphone);
            Router.push('/otp');
            setSigning(false);
        } catch (err) {

            toast(err.message);
            setSigning(false);

        }
    }

    return (
        <div>
            <div>
                <div className={classes.container}>
                    <h1 className={classes.login}>Sign-Up</h1>

                    <div className={classes.name}>
                        <h3 className={classes.emailP}>Full Name</h3>
                        <div>
                            <AccountCircleIcon className={classes.emailicon} />
                        </div>
                        <input ref={nameInputRef} className={classes.input} type="text" name="" id="" />

                    </div>

                    <div className={classes.email}>
                        <h3 className={classes.emailP}>Email Address</h3>
                        <div>
                            <EmailIcon className={classes.emailicon} />
                        </div>
                        <input ref={emailInputRef} className={classes.input} type="email" name="" id="" />
                    </div>

                    <div className={classes.number}>
                        <h3 className={classes.emailP}>Phone Number</h3>
                        <div>
                            <PhoneIcon className={classes.emailicon} />
                        </div>
                        <input ref={phoneInputRef} className={classes.input} type="tel" name="" id="" />
                    </div>

                    <div className={classes.password}>
                        <h3 className={classes.emailP}>Password</h3>
                        <div>
                            <LockIcon className={classes.emailicon} />
                        </div>
                        <input ref={passwordInputRef} className={classes.input} type="password" name="" id="" />
                    </div>


                    <div className={classes.password}>
                        <h3 className={classes.emailP}>Confirm Password</h3>
                        <div>
                            <LockIcon className={classes.emailicon} />
                        </div>
                        <input ref={confirmPasswordInputRef} className={classes.input} type="password" name="" id="" />

                    </div>

                    <Link href="/forgotpassword"><p className={classes.forgetPassword} >Forget Password ?</p></Link>

                    <div>
                        <button disabled={signingUp} onClick={signUpSuccessfully} className={classes.button}>
                            {signingUp ? <span>
                                <ClipLoader color={color} loading={signingUp} css={override} size={150} />
                            </span> : "Sign Up"}
                        </button>
                    </div>
                    <Link href="/login"><p className={classes.signUp}>Login</p></Link>



                </div>
            </div>
        </div>
    );
}

export default SignUp;
