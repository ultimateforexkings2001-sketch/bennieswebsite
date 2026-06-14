const apiKey = "7ea2542bafb045a89b0b566ab14433f8";

async function getNews(category) {

    const url =
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    let output = "";

    data.articles.forEach(article => {

        output += `
        <section class="news-card">
            <img src="${article.urlToImage}" width="100%">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">
                Read More
            </a>
        </section>
        `;
    });

    document.getElementById("news-container").innerHTML = output;

}