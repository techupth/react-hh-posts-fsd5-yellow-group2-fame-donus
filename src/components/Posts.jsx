import { useState } from "react";

function Posts() {
  const initData = [10, 30, 5, 2, 5, 4, 3];
  const [like, setLike] = useState(initData);
  function handleLike(index) {
    const updateLike = [...like];
    updateLike[index] = updateLike[index] + 1;
    setLike(updateLike);
  }
  function handleDislike(index) {
    if (like[index] > 0) {
      const updateLike = [...like];
      updateLike[index] = updateLike[index] - 1;
      setLike(updateLike);
    }
  }
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      {like.map((like, index) => {
        return (
          <div class="post-list" key={index}>
            <div class="post-item">
              <div class="post-header">
                <h2>Post Title #{index + 1}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{like}</span>
                </div>
              </div>
              <p class="post-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel turpis vestibulum, aliquet ipsum vitae, auctor
                risus. Morbi tincidunt, leo non molestie consectetur, elit
                libero faucibus tellus, sed fringilla tortor libero sit amet
                odio. Maecenas sed ante condimentum mauris euismod pellentesque
                eu eu justo...
              </p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    handleLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    handleDislike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
