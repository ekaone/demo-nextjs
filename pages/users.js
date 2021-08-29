import React from "react";

function Users({ users }) {
  return (
    <div>
      <a href="/">Back to Home</a>
      <br />
      <ul>
        {users.map((user) => (
          <li>
            ID: {user.id} - Name: {user.name} - Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  };
}

export default Users;
