"use client"

import { useState } from 'react';
import './links.css'
import NavLink from './navLink/NavLink'
import Image from 'next/image';

const links=[
    {
        title:'Homepage',
        path:'/'
    },
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Contact',
        path:'/contact'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    
];

const Links = () => {
    const [open,setOpen]=useState(false)
    //temporary
    const session=true;
    const isAdmin=true;
  return (
     <div className='links-wrapper'>
        <div className='links'>

        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}

        { session?(
                <>
                {isAdmin && (<NavLink item={{title:'Admin',path:'/admin'}}/>)}
                <button className='logout'>Logout</button>
                </>
            ):
            (<NavLink item={{title:'Login',path:"/login"}}/>)
        }
        </div>
         <Image src="/menu.png" alt='' width={30} height={30} onClick={()=>{setOpen(!open)}} className='menu-button'/>
         {
            open && <div className='mobileLinks'>
                {links.map(link=>(
                   <NavLink item={link} key={link.title}/> 
                ))}
            </div>
         }
     </div>
  )
}

export default Links