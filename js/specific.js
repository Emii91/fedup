const detailContainer = document.querySelector(".specific");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = `https://projectexam.site/FedUp/wp-json/wp/v2/posts/${id}?_embed=1&`;

console.log(url);

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

function createHtml(details) {
  detailContainer.innerHTML = `<div class="blog-image"><img src="${details._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"></div>
                                <div class="blog-post"><h1>${details.title.rendered}</h1>
                                <p>${details.content.rendered}</p></div>`;
}





// const detailContainer = document.querySelector(".specific");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// const url = "https://projectexam.site/FedUp/wp-json/wp/v2/posts?_embed=1&/" + id;



// const detailContainer = document.querySelector(".specific");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// const url = `https://projectexam.site/FedUp/wp-json/wp/v2/posts/${id}?_embed=1&`;

// console.log(url);

// async function fetchPosts() {
//     try {
//         const response = await fetch(url);
//         const details = await response.json();

//         console.log(details);

//         createHtml(details);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchPosts();

// function createHtml(details) {
//     detailContainer.innerHTML = `<div><img src="${details[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"></div>
//                                 <h1>${details[i].title.rendered}</h1>`;
// }