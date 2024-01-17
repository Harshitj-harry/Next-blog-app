"use client"
import Link from 'next/link'
import './navlink.css'
import { usePathname } from 'next/navigation'

const NavLink = ({item}) => {
    const pathName=usePathname()
  return (
    <Link href={item.path} 
    className={`navlink ${pathName===item.path && "active"}`}>
        {item.title}
    </Link>
  )
}

export default NavLink