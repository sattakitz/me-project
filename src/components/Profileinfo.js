import "./Profileinfo.css";

function Profileinfo() {
  return (
    <div className="row d-flex vertical-center text-center">
      <div className="col-12 col-md-6 col-lg-6 ">
        <img src="/me.jpg" className="img-me" alt="logo"></img>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="myprofile">
          <div className="item-img">
            <h1 className="text">SattapoN</h1>
          </div>
        </div>
        <p className="myname"> Name: Sattapon Kamchu </p>
        <div className="myemail">
          <p>E-mail: sattakitkamchu@gmail.com</p>
        </div>
        <div className="typing-demo">
          <a href="https://usecheck.com/" class="btn-shine" target="_blank">
            I am a junior web developer.
          </a>
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
            <a href="https://www.instagram.com/shut_dafux/">
              <img src="/instaicon.png" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileinfo;
