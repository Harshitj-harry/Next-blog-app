"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb"
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import  bcrypt from "bcryptjs";



//functions for the addition and deletion of a post
export const addPost=async (prevState,formData)=>{
     const {title,desc,slug,userId,img}=Object.fromEntries(formData)
    
    try{
        connectToDb();
        const newPost =new Post({
            title,
            desc,
            slug,
            userId,img
        })

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog")
        revalidatePath("/admin")

    }catch(err){
        console.log(err);
        return {err:"something went wrong!"}
    }
}

export const deletePost=async (formData)=>{
     const {id}=Object.fromEntries(formData)
    
    try{
        connectToDb();

        await Post.findByIdAndDelete(id)
        console.log("deleted form db");
        revalidatePath("/blog")
        revalidatePath("/admin")

    }catch(err){
        console.log(err);
        return {err:"something went wrong!"}
    }
}

//ADD AND DELETE  USER
 
export const addUser=async (prevState,formData)=>{
    const {username,email,password,img}=Object.fromEntries(formData)
   
   try{
       connectToDb();
       const newUser =new User({
           username,
           email,
           password,
           img
       })

       await newUser.save();
       console.log("saved to db");
       revalidatePath("/admin")

   }catch(err){
       console.log(err);
       return {err:"something went wrong!"}
   }
}

export const deleteUser=async (formData)=>{
    const {id}=Object.fromEntries(formData)
   
   try{
       connectToDb();
       await Post.deleteMany({userId:id})
       await User.findByIdAndDelete(id)
       console.log("deleted form db");
       revalidatePath("/admin")

   }catch(err){
       console.log(err);
       return {err:"something went wrong!"}
   }
}









//github login - logout functions
export const handleGithubLogin=async()=>{
    "use server"
    await signIn("github")
  }

export const handleLogout=async()=>{
    "use server"
    await signOut()
  }



//Function for registering a new user
export const register=async(previousState,formData)=>{

const {username,email,image,password,passwordRepeat}=Object.fromEntries(formData)

if(password!==passwordRepeat){
    return ({error:'password did not match'})
}

try{
    connectToDb();

    const user=await User.findOne({username})
    if(user){
        return {error:"user already exists"}
    }
    
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt)

    const newUser =new User({
        username,
        email,
        password:hashedPassword,
        image
    })

    await newUser.save();
    console.log("saved to db");

    return {success:true}

}catch(error){
    console.log(error);
    return {error:"something went wrong!"}
}


}


//function for the login page
export const login=async(prevState,formData)=>{

const {email,password}=Object.fromEntries(formData)


try{
    await signIn("credentials",{email,password})

}catch(error){
    console.log(error);
    if (error.type==="CredentialsSignin"){
        return {error:'invalid email and password '}
    }
    throw error
}

}