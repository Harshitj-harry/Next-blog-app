import { Suspense } from "react";
import "./adminPage.css"
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";
const AdminPage =async () => {
  const token=await auth()
  
  return (
    <div className="adminpage">
      <div className="row">
        <div className="col">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts/>
          </Suspense>
        </div>
        <div className="col">
            <AdminPostForm userId={token.user.id}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers/>
          </Suspense>
        </div>
        <div className="col">
            <AdminUserForm/>
        </div>
      </div>
    </div>
  );
}

export default AdminPage