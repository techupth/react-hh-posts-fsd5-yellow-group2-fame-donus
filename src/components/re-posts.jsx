import { useState } from "react";
import arrayPosts from "./user-posts";

function RePosts() {
  const [totalPost, setTotalPost] = useState(arrayPosts);

  const addLike = (index) => {
    const newClickLike = [...totalPost];
    newClickLike[index].likes += 1
    setTotalPost(newClickLike);
  };

  const disLike = (index) => {
    const newClickLike = [...totalPost];
    if (newClickLike[index].likes > 0) {
      newClickLike[index].likes -= 1;
      setTotalPost(newClickLike);
    }
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {totalPost.map((post, index) => {
          return (
            <div key={index} class="post-item">
              <div class="post-header">
                <h2>
                  {post.title} #{post.id}
                </h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes:</span>
                  <span class="post-likes">{post.likes}</span>
                </div>
              </div>
              <p class="post-content">{post.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    addLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    disLike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RePosts;