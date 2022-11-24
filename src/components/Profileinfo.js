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

        <p className='myname my-3 my-lg-5 '> Name: Sattapon Kamchu </p>

        <div className='myemail'>
          <p>E-mail: sattakitkamchu@gmail.com</p>
        </div>

        <div className='typing-demo'>
          <p className='btn-shine text-uppercase'>
            I am a Front-end web developer.
          </p>
        </div>

        <div className='mysocial mb-4'>
          <div className='icon-item facebook'>
            <a
              href='https://www.facebook.com/sattakit.kk/'
              target='_blank'
              rel='nofollow'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
          <div className='icon-item twitter'>
            <a
              href='https://twitter.com/mr_basterz'
              target='_blank'
              rel='nofollow'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
          <div className='icon-item instagram'>
            <a
              href='https://www.instagram.com/stpnz_/'
              target='_blank'
              rel='nofollow'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z'
                  fill='currentColor'
                />
                <path
                  d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                  fill='currentColor'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profileinfo
