import React from "react";

function Todos({ todos }) {
  return (
    <div>
      <a href="/">Back to Home</a>
      <br />
      <ul>
        {todos.map((todo) => (
          <li>
            ID: {todo.id} - Title: {todo.title} - Completed:{" "}
            {todo.completed === true ? "True" : "False"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      todos,
    },
  };
}

export default Todos;
