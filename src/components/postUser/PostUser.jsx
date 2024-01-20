
import { getUser } from '@/lib/data'
import './postUser.css'
import Image from 'next/image'
// data with api
// const getData=async(userId)=>{
//     const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` , {cache:"no-store"})
//     if(!res.ok){
//         throw new Error('something went wrong')
//     }
//     return res.json();
// }
const PostUser =async ({userId}) => {

    const user=await getUser(userId)
  return (
    <div className='postuser'>
      <Image className="postuser-avatar" src={user.img?user.img:"/noavatar.png"} alt="" width={50} height={50}/>
      <div className="postuser-infotext">
          <span className="postuser-infotitle">Author</span>
          <span className="postuser-infovalue">{user.username}</span>
      </div>
    </div>
  )
}

export default PostUser