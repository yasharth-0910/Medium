import React from 'react';
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from '../components/BlogSkeleton';

export const Blogs: React.FC = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
        <div>
            <Appbar />
        
            <div className='flex justify-center'> 
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl"> 
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
