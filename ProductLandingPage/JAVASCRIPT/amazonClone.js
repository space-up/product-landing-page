let btt = document.querySelector("#backToTop");
btt.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
});
let signin = document.querySelector("#sign-in");
signin.addEventListener("click", function () {
  window.location.href = "/HTML,CSS,JAVASCRIPT/HTML/feeproject2.html";
});

let search=document.querySelector("#search-form");
search.addEventListener("submit", function(event){
  event.preventDefault();
  const query=document.querySelector(".search-bar").value.trim();
  if(query){
    const amazonURL=`https://www.amazon.in/s?k=${query}&crid=3MCAGIGIE3IQE&sprefix=${query}%2Caps%2C242&ref=nb_sb_noss_2`;
    window.location.href=amazonURL;
  }else{
    alert("please enter a search query");
  }
})