const API_KEY="e98981d9ddb64984a546efe16b75f915";
const url="https://newsapi.org/v2/everything?q=";


window.addEventListener('load', ()=> fetchNews("India"));

async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    
}