function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))

}


///1 get the element where you want to add the elements
//2. 
function displayPost(posts) {
    const postContainer = document.getElementById('posts-container');

    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML = `
        
        <h4>user-${post.userId}</h4>
        <h5>post-${post.title}</h5>
        <h5>post description${post.body}</h5>
        `;
        postContainer.appendChild(postDiv);

    }
}

loadPosts();