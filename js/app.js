const apiKey = "c71f8e2dbd594a86a10f7f073ce19aa2";
const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

function fetchNews(query = "") {
  const searchUrl = query ? `${url}&q=${query}` : url;

  const loaderContainer = document.querySelector(".loader-container");
  window.addEventListener("load", () => {
    loaderContainer.style.display = "none";
  });

  axios
    .get(searchUrl)
    .then((response) => {
      const newses = response.data.articles;
      let output = "";
      newses.forEach((news) => {
        output += `
                    <div class="card">
                        <img src="${news.urlToImage}" alt="">
                        <div class="card-texts">
                            <div class="card-title">${news.title}</div>
                            <div class="card-author">author: ${news.author}</div>
                            <div class="card-description">
                                ${news.description}
                            </div>
                        </div>
                    </div>
                `;
      });

      document.querySelector(".card-container").innerHTML = output;
    })
    .catch((error) => console.log("Error fetching the news:", error));
}
fetchNews();
