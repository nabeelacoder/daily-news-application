let headlineImg = document.querySelector(".headline-img");
let headlineTitle = document.querySelector(".headline-title");
let headlineContent = document.querySelector(".headline-content");
let headlineAuthor = document.queryCommandIndeterm(".headline-author");
let headlineDescription = document.querySelector(".headline-description");

let businessImg = document.querySelector(".business-img");
let businessText = document.querySelector(".business-text");
let businessContent = document.querySelector(".business-content");

let technologyImg = document.querySelector(".technology-img");
let technologyText = document.querySelector(".technology-text");
let technologyContent = document.querySelector(".technology-content");


let newsCardImg = document.querySelector(".news-card-img");
let newsCardTitle = document.querySelector(".news-card-title");
let newsCardText = document.querySelector(".news-card-text");

let newsCardImg2 = document.querySelector(".news-card-img2");
let newsCardTitle2 = document.querySelector(".news-card-title2");
let newsCardText2 = document.querySelector(".news-card-text2");

let newsCardImg3 = document.querySelector(".news-card-img3");
let newsCardTitle3 = document.querySelector(".news-card-title3");
let newsCardText3 = document.querySelector(".news-card-text3");

const API_KEY = "6764bc2419334c17ab8633de1255362a";

const fetching_Data = async (category, pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=za&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    return response.articles;
};



const adding_Header = (data) =>{
    headlineImg.innerHTML = `<img src=${data[0].urlToImage} alt="breaking news image">`;
    headlineTitle.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    headlineContent.innerHTML = `<p>${data[0].description}</p>`;
    headlineAuthor.innerHTML = `<p>${data[0].author}</p>`;
};

const adding_BusinessNews = (data) =>{
    businessImg.innerHTML = `<img src=${data[0].urlToImage} alt="breaking news image">`;
    businessText.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    businessContent.innerHTML = `<p>${data[0].description}</p>`;
};

const adding_TechnologyNews = (data) =>{
    technologyImg.innerHTML = `<img src=${data[0].urlToImage} alt="breaking news image">`;
    technologyText.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    technologyContent.innerHTML = `<p>${data[0].description}</p>`;
};

const adding_RandomNewsOne = (data) =>{
    newsCardImg.innerHTML = `<img src=${data[0].urlToImage} alt="breaking news image">`;
    newsCardTitle.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    newsCardText.innerHTML = `<p>${data[0].description}</p>`;
};


const adding_RandomNewsTwo = (data) =>{
    newsCardImg2.innerHTML = `<img src=${data[0].urlToImage} alt="breaking news image">`;
    newsCardTitle2.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    newsCardText2.innerHTML = `<p>${data[0].description}</p>`;
};


fetching_Data("general", 20).then(adding_Header);
fetching_Data("business", 20).then(adding_BusinessNews);
fetching_Data("science", 20).then(adding_TechnologyNews);
fetching_Data("health", 20).then(adding_RandomNewsOne);
fetching_Data("entertainment", 20).then(adding_RandomNewsTwo);


