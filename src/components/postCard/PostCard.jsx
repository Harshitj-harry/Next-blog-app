import Image from 'next/image'
import './postcard.css'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className='postcard'>
         <div className="card-top">
            {post.img && <div className="card-imgContainer">
                <Image src={post.img} fill className='card-img' />
            </div>}
            <span className='card-date'>16.01.2024</span>
         </div>
         <div className="card-bottom">
            <h1 className='card-title'>{post.title}</h1>
            <p className='card-desc'>{post.desc}</p>
            <Link className="card-link" href={`/blog/${post.slug}`}>READ MORE</Link>
          
         </div>
    </div>
  )
}

export default PostCard