import PostCard from '@/components/postCard/PostCard';
import './blog.css'
import { getPosts } from '@/lib/data';

//fetch data with an api

const getData=async()=>{
  const res=await fetch('http://localhost:3000/api/blog' , {next:{revalidate:3600}})
  if(!res.ok){
    throw new Error('something went wrong')
  }
  return res.json();
}
export const metadata = {
  title: 'Blog page',
  description: 'Blog description',
}

const BlogPage = async () => {

  // fetch data with an api
  const posts=await getData();

  //fetch data without an api
  // const posts=await getPosts();
  return (
    <div className="blog">
      {posts.map(post=>(
       <div className="blog-post" key={post.id}>
        <PostCard post={post}/>
       </div>
      ))}
    </div>
  );
}

export default BlogPage