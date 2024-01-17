import PostCard from '@/components/postCard/PostCard';
import './blog.css'


const BlogPage = () => {
  return (
    <div className="blog">
      <div className="blog-post">
        <PostCard/>
      </div>
      <div className="blog-post">
        <PostCard/>
      </div>
      <div className="blog-post">
        <PostCard/>
      </div>
      <div className="blog-post">
        <PostCard/>
      </div>
       
    </div>
  );
}

export default BlogPage