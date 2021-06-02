import './Profileinfo.css'

function Profileinfo() {
    return (
        <div >
            <div className="myprofile">
                <div className="item-img">
                    <img src="/Logo-small.png" alt="logo" />
                </div>
            </div>
            <div >
                <p className="myname">
                    Sattapon Kamchu
            </p>
            </div>
            <div className="myemail">
                <p>
                    Business: sattakitkamchu@gmail.com
                </p>
            </div>
            <div className="mysocial">
                <div className="icon-item">
                    <a href="https://www.facebook.com/sattakit.kk/">
                        <img src="/facebookicon.png" alt="facebook" />
                    </a>
                </div>
                <div className="icon-item">
                    <a href="https://twitter.com/mr_basterz">
                        <img src="/twittericon.png" alt="twitter" />
                    </a>
                </div>
                <div className="icon-item">
                    <a href="https://www.instagram.com/idon_twanttomissyouanymore/">
                        <img src="/instaicon.png" alt="instagram" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Profileinfo;