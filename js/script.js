const resultsContainer = document.querySelector(".results");

const url = "https://projectexam.site/FedUp/wp-json/wp/v2/posts";

async function fetchPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            resultsContainer.innerHTML += `<a href="post.html?id=${results[i].id}" class="card">
                                            <h1>${results[i].title.rendered}</h1>Read more</a>`;
        }
    } catch (error) {
        console.log("An error has occured");
        resultsContainer.innerHTML = displayError("An error has occured");
    }
}

fetchPosts();



// const resultsContainer = document.querySelector(".results");

// const url = "https://projectexam.site/FedUp/wp-json/wp/v2/posts/";

// async function fetchPosts() {

//     try {
//         const response = await fetch(url);
//         const json = await response.json();

//         console.log(json);

//         resultsContainer.innerHTML = "";

//         const posts = json.results;

//         posts.forEach(function(post) {
//             resultsContainer.innerHTML += `<h1>${post.title.rendered}</h1>`;
//         });
//     }
//     catch(error) {
//         console.log(error);
//         resultsContainer.innerHTML = displayError("An error has occured");
//     }
// }

// fetchPosts();
