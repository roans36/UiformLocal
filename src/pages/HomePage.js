import React from 'react'
import { useSelector } from 'react-redux'
import CardUi from '../components/cardUi';


const HomePage = () => {
  const { blogs } = useSelector((store) => store.blog);

  return (
    <div className='p-4 grid-grid-cols-3 gap-5 '>
      {blogs && blogs.map((blog,) => {
        return <CardUi key={blog.id} blog={blog} />
      })}
    </div>
  )
}

export default HomePage
