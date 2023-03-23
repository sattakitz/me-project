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
          <a href='mailto: sattakitkamchu@gmail.com' className='send_me'>
            E-mail: sattakitkamchu@gmail.com
          </a>
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
              href='https://www.linkedin.com/in/sattapon-kamchu/'
              target='_blank'
              rel='nofollow'
            >
              <img
                src='/LinkedIn_logo.webp'
                className='icon_size'
                alt='LinkedIn logo'
                width='24'
                height='24'
              ></img>
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
          <div className='icon-item github'>
            <a
              href='https://github.com/sattakitz'
              target='_blank'
              rel='nofollow'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 1024 1024'
                fill='none'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z'
                  transform='scale(64)'
                  fill='#1B1F23'
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
