import React from "react";
import CategoryItem from "../components/CategoryItem";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "t-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
  return (
    <div className="relative w-full">
      {/* Subtle Ambient Background Glows specific to the Home Page */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text tracking-tight drop-shadow-sm">
            Explore Our Categories
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-medium">
            Discover the latest trends in premium eco-friendly fashion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;