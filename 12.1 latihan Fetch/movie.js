// const btnsearch = document.querySelector(".btn-search");

// btnsearch.addEventListener("click", function () {
//   const inputkeyword = document.querySelector(".input-keyword");
//   const url = `http://www.omdbapi.com/?apikey=be5104fa&s=`;
//   fetch(url + inputkeyword.value)
//     .then((response) => response.json() )
//     .then((response) => {
      
//       getmovie(response)
//       modoldetail();

//     }).catch((error) => {
//       alert(error.message)
//     })
// });

// function getmovie(response) {
//   const movies = response.Search;
//       let cards = ''
      
//       movies.forEach(modal => cards += ShowMovie(modal))
      
//       const movieContainer = document.querySelector('.movie-container')
//   movieContainer.innerHTML = cards;
// }

// function modoldetail() {
//   const moviedetail = document.querySelectorAll('.modal-btn');
//       moviedetail.forEach(btn => {
//         btn.addEventListener('click', function () {
//           const imdb = this.dataset.imdbid;
//           fetch(`http://www.omdbapi.com/?apikey=be5104fa&i=`+ imdb)
//             .then(response => response.json())
//             .then(m => {
//               const moviedetails = ShowMovieDetail(m);
//               const modalbody = document.querySelector('.modal-body')
//               modalbody.innerHTML = moviedetails;
//             })
//         })
//       })
// }


// const btnsearch = document.querySelector('.btn-search');

// btnsearch.addEventListener('click', function () {
  
//   const inputkeyword = document.querySelector('.input-keyword');
//   const url = `http://www.omdbapi.com/?apikey=be5104fa&s=`;

//   fetch(url + inputkeyword.value)
//     .then(response => {
//       if (!response.ok) {
//       throw new Error("somethis is wrong")
//       }
//       else {
//          return response.json();
//       }
      
//     }).then(response => {
//       const movies = response.Search;
//       console.log(movies)
//       let cards = '';

//       movies.forEach(movie => {
//         cards += ShowMovie(movie);
//       })

//       document.querySelector('.movie-container').innerHTML = cards;
      
//       const modalmovie = document.querySelectorAll('.modal-btn');
      
//         modalmovie.forEach(btnmodal => {
//           btnmodal.addEventListener('click', function () {
//             const imdbid = this.dataset.imdbid;
//             const url = `http://www.omdbapi.com/?apikey=be5104fa&i=`;
//             fetch(url + imdbid)
//               .then(response => {
//                 if (!response.ok) {
//                  throw new Error('Erorr')
//                 } else {
//                   return response.json();
//                }
//               }).then(response => {
//                 const details= response;

//                 const m = ShowMovieDetail(details);
//                 const modalbody = document.querySelector('.modal-body')
//                 modalbody.innerHTML = m;
//               })

//           })
//         })

   
//     }).catch(error => {
//         alert(error.message)
//     })

// })

const searchbtn = document.querySelector('.btn-search')

searchbtn.addEventListener('click', async function () {
 const inputkeyword = document.querySelector('.input-keyword')
  const movies =  await getmovie(inputkeyword.value)
  updatemovie(movies)
})


function getmovie(keyword) {
   
  const url = `http://www.omdbapi.com/?apikey=be5104fa&s=`;


   return fetch(url+keyword)
    .then(response => {
    
      if (response.status == false) {
    
        throw new Error(response.status);
      }
        return response.json();
     
     }).then(response => {
      
      if (response.Response === "False") {

        document.querySelector('.error').innerHTML = response.Error;
        document.querySelector('.movie-container').style.display = "none"

        throw new Error(response.Error);
        
      } else {
        
        return response.Search;
      }
      
    }).catch(error => {
      console.log(error)
    })
}

function updatemovie(movies) {
  document.querySelector('.error').innerHTML = "";
        const moviecontainer = document.querySelector('.movie-container')

       
        moviecontainer.style.display ="flex"
      
        let cards =""        
        movies.forEach(movie => {
          cards += ShowMovie(movie);
        })
        
        
        moviecontainer.innerHTML = cards;
}

function ShowMovieDetail(m) {
  return `<div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <img src="${m.Poster}" alt="" class="img-fluid" />
                </div>
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item">${m.Title} <strong>(${m.Year})</strong></h4></li>
                    <li class="list-group-item">
                      <strong>Director : </strong>${m.Director}
                    </li>
                    <li class="list-group-item">
                      <strong>Actor : </strong>${m.Actors}
                    </li>
                    <li class="list-group-item">
                      <strong>Writer : </strong>${m.Writer}
                    </li>
                    <li class="list-group-item">
                      <strong>Plot : </strong><br />${m.Plot}
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
}

function ShowMovie(m) {
  return ` <div class="col-md-4 g-5" >
                    <div class="card h-100">
                      <img src="${m.Poster}" class="card-img-top object-fit-contain h-100" />
                      <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                      
                        <a href="#" class="btn btn-primary modal-btn"  data-bs-toggle="modal"
                         data-bs-target="#movie-detail-modal" data-imdbid="${m.imdbID}">Show Details</a>
                      </div>
                    </div>
                  </div>`;
}


function clear() {
  const moviecontainer = document.querySelector('.movie-container')
  moviecontainer.textContent=''
  
}