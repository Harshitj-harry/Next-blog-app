
import { getPosts } from '@/lib/data'
import  './adminPosts.css'
import Image from 'next/image'
import { deletePost } from '@/lib/action'

const AdminPosts = async() => {
    
    const posts=await getPosts()
  return (
    <div className='adminposts'>
        <h1>Posts</h1>
        {posts.map(post=>(
          <div className="post" key={post.id}>
              <div className="detail">
                <Image src={post.img || "/noavatar.png"} alt='' width={50} height={50} />
                <span>{post.title}</span>
              </div>
              <form action={deletePost}>
                <input type="hidden" name='id' value={post.id} />
                <button className='postbutton'>Delete</button>
              </form>
          </div>
        ))}
    </div>
  )
}

export default AdminPosts