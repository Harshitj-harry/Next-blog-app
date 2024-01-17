
import  './navbar.css'
import Links from './links/Links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link href="/" className='logo'>Logo</Link>
        <div>
            <Links/>
        </div>
    </div>
  )
}

export default Navbar