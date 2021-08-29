import React from "react";

function Albums({ albums }) {
  return (
    <div>
      <a href="/">Back to Home</a>
      <br />
      <ul>
        {albums.map((album) => (
          <li>
            ID: {album.id} - Title: {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      albums,
    },
  };
}

export default Albums;
