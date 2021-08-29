import React from "react";

function Posts({ posts }) {
  return (
    <div>
      <a href="/">Back to Home</a>
      <br />
      <ul>
        {posts.map((post) => (
          <li>
            ID: {post.id} - Title: {post.title} - Body: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
