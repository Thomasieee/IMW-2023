const apiUrl =
  "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=1753e7d1761e9b9e64a91a0fb9b1656f";

fetch(apiUrl)
  .then((response) => response.json())
  .then(({ articles }) => {
    const firstArticle = articles[0];
    const newsArticleElement = document.getElementById("newsArticle");

    if (firstArticle) {
      const { title, description, image, url } = firstArticle;
      const createE = (tag, content) =>
        Object.assign(document.createElement(tag), { textContent: content });

      const titleElement = createE("h2", title);
      const descriptionElement = createE("p", description);
      const imageElement = createE("img", "");
      imageElement.src = image;
      imageElement.alt = "News Image";
      const linkElement = createE("a", "Read more");
      linkElement.href = url;
      linkElement.target = "_blank";

      newsArticleElement.innerHTML = `
        ${titleElement.outerHTML}
        ${descriptionElement.outerHTML}
        ${imageElement.outerHTML}
        ${linkElement.outerHTML}
      `;
    } else {
      newsArticleElement.innerHTML = "<p>No news articles available.</p>";
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("newsArticle").innerHTML =
      "<p>Error fetching data. Please try again later.</p>";
  });
