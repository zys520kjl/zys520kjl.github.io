var posts=["2025/03/19/hello-world/","2025/03/19/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };