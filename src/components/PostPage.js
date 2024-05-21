import React from 'react'
import { Link, useParams } from 'react-router-dom'
const PostPage = ({posts,handleDelete}) => {
  const {id}=useParams()
  const post = posts.find(post =>(post.id).toString()===id)
  return (
    <main className='PostPage'>
     <article className='PostPage'>
      {post &&
      <>
       <h2>{post.title}</h2>
       <p className='postDate'>{post.datetime}</p>
       <p className='postBody'>{post.body}</p>
       <button onClick={()=>handleDelete(post.id)} className='deleteButton '> delete post</button>
      </>
      }
      {
        !post&&
        <>
          <h2>post not found</h2>
          <p>well,that's disappointing</p>
          <p><Link to="/">Visit our HomePage</Link></p>
        </>
      }
     </article>
    </main>
  )
} 
   
export default PostPage