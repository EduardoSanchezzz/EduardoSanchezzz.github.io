import line from './assets/line.svg'

function Navbar() {
  return (
    <div className='navbar' data-aos="slide-down">
      <a href='/#projects'>
        <h1>projects</h1>
      </a>
      <a href='/#experience'>
        <h1>experience</h1>
      </a>
      <a href='/about'>
        <h1>about</h1>
      </a>
      <div className='scroll-container'>
        <img src={line} className='line' alt='line' /> 
        <img src={line} className='line' alt='line' />
        <img src={line} className='line' alt='line' />
      </div>
    </div>
  )
}
export default Navbar;