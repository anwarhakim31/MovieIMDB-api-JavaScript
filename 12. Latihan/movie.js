$(".btn-search  ").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=be5104fa&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += ShowMovie(m);
      });
      $(".movie-container").html(cards);

      $(".modal-btn").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=be5104fa&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const modalDetail = ShowMovieDetail(m);

            $(".modal-body").html(modalDetail);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function ShowMovieDetail(m) {
  return `<div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <img src="${m.Poster}" alt="" class="img-fluid" />
                </div>
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item">${m.Title} ${m.Year}</h4></li>
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
