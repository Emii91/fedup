const resultsContainer = document.querySelector(".blog");

const url = "https://projectexam.site/FedUp/wp-json/wp/v2/posts?_embed=1&";

async function fetchPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            resultsContainer.innerHTML += `<a href="specific.html?id=${results[i].id}" class="card">
                                            <div><img src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"></div>
                                            <h1>${results[i].title.rendered}</h1>
                                            <p>Read more<p></a>`;
        }
    } catch (error) {
        console.log("An error has occured");
        resultsContainer.innerHTML = displayError("An error has occured");
    }
}

fetchPosts();
