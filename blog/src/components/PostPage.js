import React from 'react'
import { useParams, Link } from 'react-router-dom'

function PostPage({ posts, handleDelete }) {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='PostPage'>
      <article className='post'>
            {post && 
                <>
                  <h2>{post.title}</h2>
                  <p className='postDate'>{post.dateTime}</p>
                  <p className='postBody'>{post.body}</p>
                  <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                  <button className='deleteButton' onClick={() => handleDelete(post.id)}>Delete Post</button>
                </>
            }
            {!post &&
              <>
                <h2>Post Not Found</h2>
                <p>
                  <Link to='/'>Visit Our Homepage</Link>
                </p>
              </>
              
            }
      </article>
    </main>
  )
}

export default PostPage
