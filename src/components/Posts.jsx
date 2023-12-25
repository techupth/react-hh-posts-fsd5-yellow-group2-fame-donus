import { useState } from "react";
import arrayPosts from "./user-posts"

function Posts() {
  const [totalPost,setTotalPost] = useState(arrayPosts)
  const [clickLike,setClickLike] = useState(arrayPosts.map((like) => like.likes))

  const addLike = (index) => {
  const newClickLike = [...clickLike]
  newClickLike[index] += 1
  setClickLike(newClickLike)
  }

  const disLike = (index) => {
    const newClickLike = [...clickLike]
    if (newClickLike[index] > 0) {
      newClickLike[index] -= 1  
      setClickLike(newClickLike)
    }
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {totalPost.map((post,index) => {
          return <div key={index} class="post-item">
          <div class="post-header">
            <h2>{post.title} #{post.id}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes:</span>
              <span class="post-likes">{clickLike[index]}</span>
            </div>
          </div>
          <p class="post-content">
            {post.content}
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={() => {
              addLike(index)
            }}>Like</button>
            <button class="dislike-button"onClick={() => {
              disLike(index)
            }}>Dislike</button>
          </div>
        </div>
          })
        }
      </div>
    </div>
  );
}

export default Posts;
