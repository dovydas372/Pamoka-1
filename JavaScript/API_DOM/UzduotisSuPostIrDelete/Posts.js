window.addEventListener("DOMContentLoaded", () => renderPosts());
const container = document.querySelector(".irasai");

const renderPosts = async () => {
  let uri = "http://localhost:3000/posts";

  const res = await fetch(uri);
  const posts = await res.json();

  let template = "";
  posts.forEach((element) => {
    template += `
    <div class="post">
    <h2>${element.title}</h2>
    <p><small>${element.likes} likes </small></p>
    <p>${element.body.slice(0, 200)}</p>
    <a href="details.html?id=${element.id}">Placiau</a>
    </div>`;
  });
  container.innerHTML = template;
};
