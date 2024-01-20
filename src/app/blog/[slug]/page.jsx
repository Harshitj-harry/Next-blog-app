import Image from "next/image";
import "./singlePost.css"
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//fetching data with an api

const getData=async(slug)=>{
  const res=await fetch(`http://localhost:3000/api/blog/${slug}`)
  if(!res.ok){
    throw new Error("something wet wrong")

  }
  return res.json();
}

export const generateMetadata=async({params})=>{
  const {slug}=params
  const post= await getPost(slug)

  return{
    title:post.title,
    description:post.desc
  }
}

const SinglePostPage = async ({params}) => {
   const {slug}=params
   const post =await getData(slug)
  // without the api

  //  const post= await getPost(slug)
  return (
    <div className="singlePost">
     {post.img && <div className="sp-imagecontainer">
        <Image className="sp-img" src={post.img} alt="" fill/>
      </div>}

      <div className="sp-textcontainer">
        <h1 className="sp-title">{post.title}</h1>
        <div className="sp-info">
          {post && <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>}
          <div className="sp-infotext">
            <span className="sp-infotitle">Published</span>
            <span className="sp-infovalue">{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className="sp-content">
          {post.desc}
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage