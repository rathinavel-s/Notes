import React from 'react'


const Newpost = ({postTitle,setPostTitle, handlesubmit,postBody,setpostBody}) => {
  return (
    <main className='NewPost'>
     <h2>New Notes</h2>
     <form className='newPostForm'onSubmit={handlesubmit} >
     <label htmlFor='postTitle'>Title:</label>
     <input type='text' required value={postTitle} onChange={(e)=> setPostTitle(e.target.value)}/>

      <label htmlFor='postTitle'>Notes:</label>
      <textarea  style={{width:"765px",height:"50px"}} id='postBody' required value={postBody} onChange={(e)=>setpostBody(e.target.value)}/>
      <button type='submit'>Submit</button>
     </form>
    </main>
  )
}

export default Newpost