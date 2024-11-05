// Previous content remains the same, just adding onClick handler for read more:

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
  index,
  slug
}) => {
  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = slug;
  };

  return (
    // ... existing JSX
    <button 
      onClick={handleReadMore}
      className="group inline-flex items-center text-navy-600 hover:text-navy-800 transition-colors"
    >
      <span className="border-b-2 border-transparent group-hover:border-navy-600 transition-colors">
        Read Article
      </span>
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </button>
    // ... rest of existing JSX
  );
};