import { getUsers } from '@/lib/data'
import  './adminUsers.css'
import Image from 'next/image'
import { deleteUser } from '@/lib/action'

const AdminUsers = async() => {
  const users=await getUsers()
  return (
    <div className='adminusers'>
      <h1>Users</h1>
        {users.map(user=>(
          <div className="user" key={user.id}>
              <div className="detail">
                <Image src={user.img || "/noavatar.png"} alt='' width={50} height={50} />
                <span >{user.username}</span>
              </div>
              <form action={deleteUser}>
                <input type="hidden" name='id' value={user.id} />
                <button className='userbutton'>Delete</button>
              </form>
          </div>
        ))}
    </div>
  )
}

export default AdminUsers