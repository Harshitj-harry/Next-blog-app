
import  './navbar.css'
import Links from './links/Links'
import Link from 'next/link'
import { auth } from '@/lib/auth'

const Navbar = async () => {
  const session =await auth();
  return (
    <div className="navbar">
        <Link href="/" className='logo'>Logo</Link>
        <div>
            <Links session={session}/>
        </div>
    </div>
  )
}

export default Navbar