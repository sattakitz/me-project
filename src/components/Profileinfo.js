import "./Profileinfo.css";

function Profileinfo() {
  return (
    <div className="row d-flex vertical-center text-center">
      <div className="col-12 col-md-6 col-lg-6 ">
        <div class="card">
          <div class="card-item">
            <img src="/me.jpg" className="img-me" alt="sattapon Me"></img>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="myprofile">
          <h1 className="text">SattapoN</h1>
        </div>
        <p className="myname"> Name: Sattapon Kamchu </p>
        <div className="myemail">
          <p>E-mail: sattakitkamchu@gmail.com</p>
        </div>
        <div className="typing-demo">
          <p class="btn-shine">I am a junior web developer.</p>
        </div>
        <div className="mysocial mb-4">
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
