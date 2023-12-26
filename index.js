document.addEventListener("DOMContentLoaded", function () {
  const commentsContainer = document.getElementById("commentsContainer");

  // Fetched the first 25 comments from the API 
  fetch("https://jsonplaceholder.typicode.com/comments?_limit=24")
    .then(response => response.json())
    .then(comments => {
      // Updated the HTML with the first 24 comments in Bootstrap cards
      comments.forEach(comment => {
        const card = document.createElement("div");
        card.className = " col-lg-4 col-md-6 mb-3 col-sm-12";

        card.innerHTML = `
        <div class="card" style="width:300px">
          <img class="card-img-top" src="card.png" alt="Card image" style="width:100%">
            <div class="card-body">
              <h5 class="card-title">Name: ${comment.name}</h5>
              <h6 class="card-subtitle mb-2">Email: ${comment.email}</h6>
              <p class="card-text">${comment.body}</p>
            </div>
        </div>
        `;

        commentsContainer.appendChild(card);
      });
    })
    .catch(error => console.error("Error fetching comments:", error));
});
