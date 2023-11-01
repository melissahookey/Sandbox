const auth = "https://accounts.spotify.com/authorize";
const token = "https://api.spotify.com/v1/search/token";

const input = document.getElementById("input");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userSearchInput = form.value;
  const APIurl = `https://api.spotify.com/v1/search?q=${userSearchInput}`;

  fetch(APIurl)
    .then((res) => res.json())
    .then(console.log);
});

// haven't tried using yet
