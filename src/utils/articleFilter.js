import articles from "..data/articles";

export function getArticlesByCategory(category) {
  return articles.filter(article =>
    article.category === category
  );
}