const xhr=new XMLHttpRequest();

let button= document.getElementById("submit_button");
button.addEventListener("click",buttonClick);

function buttonClick(){
    let input= document.getElementById("search_box").value;
    xhr.open("GET","http://www.omdbapi.com/?t="+input+"&apikey=df9e5fa9",true);
    
    xhr.onload =function(){
        if(xhr.status ===200){
            let response=JSON.parse(xhr.responseText);

            let MovieName="Movie Tittle  - "+response.Title;
            let  movie_tittle= document.getElementById("movie_tittle");
            movie_tittle.innerHTML=MovieName;
            
            let Director="Director Name  - "+response.Director;
            let director_name = document.getElementById("director_name");
            director_name.innerHTML=Director;
            
            let Realsion_Date="Reals Date  - "+response.Released;
            let  reals_date= document.getElementById("reals_date");
            reals_date.innerHTML=Realsion_Date;
            
            let BoxOffice="BoxOffice  - "+response.BoxOffice;
            let boxoffice= document.getElementById("boxoffice");
            boxoffice.innerHTML=BoxOffice;
            
            let Rating="Rating  - "+response.Ratings[0].Value;
            let  ratings= document.getElementById("rating");
            rating.innerHTML=Rating;
        }else{
            console.log("some Error ");
        }    
    }   
    xhr.send(); 
}
