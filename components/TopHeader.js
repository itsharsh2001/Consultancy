import classes from "./TopHeader.module.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from '@material-ui/icons/Person';
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'
import { useSession, signOut } from 'next-auth/client'

function TopHeader(props) {

  const Router = useRouter();

  const [session, loading] = useSession();
  const [logout, setLogout] = useState(props.text);


  function logoutHandler() {
    signOut();
  }



  return (
    <header id="banner" className={classes.header}>
      <ul>
        <li>
          <EmailIcon />
          <p>example@gmail.com</p>
        </li>
        <li>
          <PhoneIcon />
          <p>+91 1234567890</p>
        </li>
      </ul>
      {!session && !loading && (
         <Link href="/signup"><button className={classes.button}>Login/SignUp</button></Link>
      )
      }
      

      {/* {session &&(
        <button onClick={logoutHandler} className={classes.button}>Logout</button>
      )
      } */}

      {
         logout==1 && session? <button onClick={logoutHandler} className={classes.button}>Logout</button>
         :null
      }

        {
        logout!=1 && session?
        <Link href="/admin-panel"><button className={classes.button}>My Account</button></Link>
         :null
      }

      
      <div fontSize="large" className={classes.personIcon}>
        <PersonIcon className={classes.Icon} fontSize="large" />
      </div>
    </header>
  );
}

export default TopHeader;
