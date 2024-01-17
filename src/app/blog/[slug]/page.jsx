import Image from "next/image";
import "./singlePost.css"

const SinglePostPage = () => {
  return (
    <div className="singlePost">
      <div className="sp-imagecontainer">
        <Image className="sp-img" src="/post.jpg" alt="" fill/>
      </div>

      <div className="sp-textcontainer">
        <h1 className="sp-title">Title</h1>
        <div className="sp-info">
          <Image className="sp-avatar" src="/post.jpg" alt="" width={50} height={50}/>
          <div className="sp-infotext">
            <span className="sp-infotitle">Author</span>
            <span className="sp-infovalue">Harshit Joshi</span>
          </div>
          <div className="sp-infotext">
            <span className="sp-infotitle">Published</span>
            <span className="sp-infovalue">16.01.2024</span>
          </div>
        </div>
        <div className="sp-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente odio officiis vitae perferendis architecto ullam dolore suscipit reiciendis rem et cum odit animi ea incidunt, voluptatem, saepe earum eos molestias?
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage