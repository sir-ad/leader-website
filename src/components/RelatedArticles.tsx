// Previous content remains the same, just adding click handler:

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  const handleArticleClick = (slug: string) => {
    window.location.href = slug;
  };

  return (
    // ... existing JSX with added onClick
    <div 
      onClick={() => handleArticleClick(article.slug)}
      className="cursor-pointer"
    >
      // ... rest of existing JSX
    </div>
  );
};