import './App.css'
import { useState } from 'react'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/userList'

function App() {
  const [users, setUsers] = useState([{
    id: 1,
    image: 'https://picsum.photos/400?random=1',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 2,
    image: 'https://picsum.photos/400?random=2',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 3,
    image: 'https://picsum.photos/400?random=3',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 4,
    image: 'https://picsum.photos/400?random=4',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 5,
    image: 'https://picsum.photos/400?random=5',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 6,
    image: 'https://picsum.photos/400?random=6',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 7,
    image: 'https://picsum.photos/400?random=7',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 8,
    image: 'https://picsum.photos/400?random=8',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
  {
    id: 9,
    image: 'https://picsum.photos/400?random=9',
    firstName: 'Ayubxon',
    lastName: 'Axmatxonov',
    age: 25,
    from: 'Uzbekistan',
    job: 'Frontend Developer',
    gender: 'Male'
  },
])
// delete user
const deleteUser = (id) => {
  setUsers((prev) => {
    return prev.filter((user) => {
      return user.id !== id
    })  
  })
}
  return (
    <div className='App'>
      <Navbar usersLength={users.length}/>
        <main>
         <div className='no-users'>
          {users.length === 0 && <h2>No users</h2>}
         </div>
         <UserList users={users} deleteUser={deleteUser}/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
