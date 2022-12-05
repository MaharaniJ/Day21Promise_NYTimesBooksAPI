//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=J63QBTyu7Kzs9GKRlhoWBrGV68o4eNgO


function getNYTimesBooks(){
 
  
    let url =`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=J63QBTyu7Kzs9GKRlhoWBrGV68o4eNgO`
  
// calling api
fetch(url).then((res)=>res.json()).then((data)=>{
    
      //console.log("Books:",data.results.books)
       
      const noofBooks = data.results.books.length  //no of books
      
      //for each books build cards
      for(let i=0; i<noofBooks; i++)
      {
      
     let row=document.querySelector(".row");
     let div = document.createElement("div");

     div.className="col-sm-6 col-md-4 col-lg-4 col-xl-4"
     
     // Building Card for each Books
     let fileLoad=
     `<div class="card h-100" >
              <div class="card-header">${data.results.books[i].title}</div>
                <div class="card-body">
                     <img class="flag1" src="${data.results.books[i].book_image}" alt="" className="block mx-auto w-1/2">
                     <div class=align><br>
                     <p class="card-text">${(data.results.books[i].description)}</p>
                     <p class="card-text">Author : ${data.results.books[i].author}</p>
                     <p class="card-text">ISBN : ${data.results.books[i].primary_isbn10}</p>
                     <p class="card-text">Publisher : ${data.results.books[i].publisher}</p>
                     <p class="card-text"><b>Rank : </b>${data.results.books[i].rank}</p>
                     <br>
                </div>
               </div>
             </div>`

     div.innerHTML=fileLoad;
     row.appendChild(div)        //placing the content in div and in row div
      }
     }
)}getNYTimesBooks();



