import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
        <ul>
          <li><Link to="/postpage/1">Post 1</Link></li>
          <li><Link to="/postpage/2">Post 2</Link></li>
          <li><Link to="/postpage/3">Post 3</Link></li>
          <li><Link to="/postpage/newpost">New Post</Link></li>
          <Outlet />
        </ul>
    </>
  )
}

export default PostLayout
