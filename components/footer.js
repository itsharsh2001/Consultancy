import classes from './footer.module.css'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CopyrightIcon from '@material-ui/icons/Copyright';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { IconButton } from '@material-ui/core';
import Link from 'next/link'


export default function footer() {
    return (
        <div>
            <div className={classes.details}>
                <div className={classes.number}>
                    <CallIcon fontSize="large" className={classes.phoneIcon} />
                    <div className={classes.numberDetails}>
                        <span className={classes.numberDetailstext}>Toll Free: 1800 313 4151</span>
                        <span className={classes.numberDetailstext}>Customer Care: 8980685509</span>
                    </div>
                </div>
                <div className={classes.message}>
                    <EmailIcon fontSize="large" className={classes.phoneIcon} />
                    <span className={classes.supportEmail}>support@legalwiz.in</span>
                </div>
                <div className={classes.connectWithUs}>
                    <span className={classes.connectWithUstext}>CONNECT WITH US</span>
                    <span className={classes.socialIcons}>
                        {/* <IconButton> */}
                        <FacebookIcon fontSize="large" className={classes.phoneIcon} />
                        {/* </IconButton> */}
                        {/* <IconButton> */}
                        <TwitterIcon fontSize="large" className={classes.phoneIcon} />
                        {/* </IconButton> */}
                        {/* <IconButton> */}
                        <InstagramIcon fontSize="large" className={classes.phoneIcon} />
                        {/* </IconButton> */}
                        {/* <IconButton> */}
                        <LinkedInIcon fontSize="large" className={classes.phoneIcon} />
                        {/* </IconButton> */}
                        {/* <IconButton> */}
                        <YouTubeIcon fontSize="large" className={classes.phoneIcon} />
                        {/* </IconButton> */}
                    </span>
                </div>
            </div>

            <div className={classes.footerLinks}>
                <div className={`${classes.popularServices} ${classes.popularServices2}`}>

                    <span className={classes.popularServicesText}>POPULAR SERVICES</span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href="/private-company-registration">
                        <span className={classes.footerItems}>Privated Limited Company Registration</span>
                        </Link>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href="">
                        <span className={classes.footerItems}>One Person Company Registration</span>
                        </Link>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <span className={classes.footerItems}>LLP Registration</span>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <span className={classes.footerItems}>Partnership Firm Registration</span>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <span className={classes.footerItems}>Solo Proprietorship Firm Registration</span>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <span className={classes.footerItems}>GST Return Filing</span>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <span className={classes.footerItems}>Trademark Registration</span>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <span className={classes.footerItems}>Accounting and Bookkeeping</span>
                    </span>
                    
                    
                </div>


                <div className={`${classes.popularServices} ${classes.aboutUsServices}`}>

                    <span className={classes.popularServicesText}>Company</span>

                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href="/about-us">
                        <span className={classes.footerItems}>About Us</span>
                        </Link>
                    </span>
                    {/* <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href="/blog">
                        <span className={classes.footerItems}>Blog</span>
                        </Link>
                    </span> */}
                    
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href="/contact-us">
                        <span className={classes.footerItems}>Contact Us</span>
                        </Link>
                    </span>
                    
                </div>


                <div className={classes.popularServices}>

                    <span className={classes.popularServicesText}>Terms and Policies</span>

                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href='/privacy-policy'>
                        <span className={classes.footerItems}>Privacy Policy</span>
                        </Link>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href='/terms-and-conditions'>
                        <span className={classes.footerItems}>Terms and Conditions</span>
                        </Link>
                    </span>
                    <span>
                        <ArrowForwardIcon fontSize="small" className={classes.arrowForwardIcon} />
                        <Link href='/satisfaction-guarantee-policy'>
                        <span className={classes.footerItems}>Satisfaction Guarantee</span>
                        </Link>
                    </span>
                    
                    {/* <span className={classes.footerFormDesign}>
                        <form className={classes.footerForm} action="">

                        <span className={classes.formFooterText}>NEWSLETTER SUBSCRIPTION</span>

                        <input className={classes.formFooterInput} type="text" placeholder="Name"name="" id="" />

                        <input className={classes.formFooterInput} type="email" placeholder="Email"name="" id="" />

                        <button className={classes.formFooterButton} type="submit">Subscribe Now</button>

                        </form>
                    </span> */}

                    <span>

                    </span>

                </div>


                <div className={classes.clicker_directToTop}>
                    <IconButton>
        
                   < ArrowDropDownCircleIcon onClick={() => {
                  document
                    .getElementById("banner")
                    .scrollIntoView({ behavior: "smooth" });
                }} className={classes.clicker_directToTopIcon} fontSize="large"/>

                </IconButton>

                </div>

            </div>

            <div className={classes.footer_copyright}>
            <CopyrightIcon className={classes.footer_copyrightIcon} fontSize="medium"/>
            <p className={classes.footer_copyrightText}>LegalWiz.in - LegalWiz.in is the leading provider of personalized online legal solutions & legal documents in India.</p>
            </div>

        </div>

    )
}