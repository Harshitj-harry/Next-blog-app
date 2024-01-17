import Image from 'next/image'
import './postcard.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className='postcard'>
         <div className="card-top">
            <div className="card-imgContainer">
                <Image src="/post.jpg" fill className='card-img' />
            </div>
            <span className='card-date'>16.01.2024</span>
         </div>
         <div className="card-bottom">
            <h1 className='card-title'>Title</h1>
            <p className='card-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos nisi veritatis deserunt consectetur. Nobis, corporis quaerat. Sunt veniam ea sit! Qui a at odit, cum ratione debitis quas! Similique!</p>
            <Link className="card-link" href="/blog/post">READ MORE</Link>

         </div>
    </div>
  )
}

export default PostCard