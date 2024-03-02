const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

/* searched-movied */

const getMovie =async(api)=>{
    const response=await fetch(api)
    const data= await response.json()
showMovie(data.results)


}

getMovie(APIURL)


const showMovie=(data)=>{
    const movieBox=document.getElementById('movie-box')
    movieBox.innerHTML = ""
/* forEach */

data.forEach((item)=>{
   //console.log(item)
const div=document.createElement('div')
div.classList.add('box')

div.innerHTML=`
   <img src="${IMGPATH + item.poster_path} " alt="ds" />
  <div class="overlay">
      <h2>Overview:${item.title}</h2>
      <p>${item.overview}</p>
 </div>

`;

movieBox.appendChild(div)






})


}

/* search */
const search=document.getElementById("search")
search.addEventListener('keyup',function(event){

if(event.target.value !=""){

    getMovie(SEARCHAPI + event.target.value)

}else{
    getMovie(APIURL)
}



})