const id = new URLSearchParams(window.location.search).get("id");
const container2 = document.querySelector(".details");
let deleteBtn = document.querySelector(".delete");
const renderPosts2 = async () => {
  let template = "";
  try {
    const res = await fetch("http://localhost:3000/posts/" + id);
    const posts = await res.json();

    template = `
    <h1>${posts.title}</h1>
    <p>${posts.body}</p>
    `;
  } catch (a) {
    template = "nera tokio id";
  }

  container2.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", () => renderPosts2());
if (id === null) {
  container2.innerHTML = "nera tokio id";
}

deleteBtn.addEventListener("click", async (e) => {
  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  window.location.replace("Posts.html");
});
