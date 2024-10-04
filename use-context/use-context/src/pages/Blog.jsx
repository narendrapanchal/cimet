import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { fetchPosts } from '../AllRoutes';
import BlogCard from '../components/BlogCard';
function Blog() {
  const {id}=useParams();
  const [blogs, setBlogs] = useState({ data: [], pages: 0 });
  useEffect(()=>{
    (async()=>{
      const { data, pages } = await fetchPosts(10, id);
      setBlogs({ data, pages });
    })()

  },[id])
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
        {(blogs?.data?.length>0)&&blogs?.data.map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      <div className="mt-6 flex justify-center">
        {new Array(blogs.pages).fill(null).map((_, index) => (
          <Link to={`/blog/${index+1}`}
            key={"link"+index}
            className={`mx-1 px-4 py-2 rounded ${
              id == index+1
                ? 'bg-gray-400 '
                : 'bg-blue-500 text-white hover:bg-blue-600 transition'
            }`}
          >
            {index+1}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog
