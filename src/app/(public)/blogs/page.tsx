/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-cache",
  });
  const { data: blogs } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      {blogs.data.map((blog: any) => (
        <BlogCard key={blog.id} post={blog} />
      ))}
    </div>
  );
};

export default AllBlogsPage;
