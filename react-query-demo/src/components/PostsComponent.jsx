// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

// Fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook with advanced options
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes before data is considered stale
    cacheTime: 1000 * 60 * 10, // 10 minutes to keep cached data
    refetchOnWindowFocus: true, // Refetch data when the window regains focus
    keepPreviousData: true, // Preserve previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button
        onClick={refetch}
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Refetch Posts
      </button>
      {isFetching && <div>Fetching new data...</div>}
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
