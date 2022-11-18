import './Profileinfo.css'

function Profileinfo () {
  return (
    <div className='row d-flex vertical-center text-center'>
      <div className='col-12 col-md-6 col-lg-6 '>
        <div class='item e6'>
          <img src='/me.jpg' className='img-me' alt='sattapon Me'></img>
          <div class='text_hove'>
            <h3>Bachelor of Science (B. Sc.)</h3>
            <p>Computer Science</p>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-6'>
        <div id='app'>
          <div id='wrapper'>
            <h1 className='glitch text-uppercase' data-text='SattapoN'>
              SattapoN
            </h1>
          </div>
        </div>

        <p className='myname my-5'> Name: Sattapon Kamchu </p>

        <div className='myemail'>
          <p>E-mail: sattakitkamchu@gmail.com</p>
        </div>

        <div className='typing-demo'>
          <p className='btn-shine text-uppercase'>
            I am a Front-end web developer.
          </p>
        </div>

        <div className='mysocial mb-4'>
          <div className='icon-item'>
            <a href='https://www.facebook.com/sattakit.kk/' target="_blank" rel="nofollow" >
              <img src='/facebookicon.png' alt='facebook' />
            </a>
          </div>
          <div className='icon-item'>
            <a href='https://twitter.com/mr_basterz' target="_blank" rel="nofollow">
              <img src='/twittericon.png' alt='twitter' />
            </a>
          </div>
          <div className='icon-item'>
            <a href='https://www.instagram.com/stpnz_/' target="_blank" rel="nofollow">
              <img src='/instaicon.png' alt='instagram' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profileinfo
