const searchForm = document.querySelector(".search2");
const paieskosRezultatas = document.querySelector(".paieskaa");
const renderPosts2 = async (term) => {
  console.log(term);
  let uri = "http://localhost:3000/posts";

  const res = await fetch(uri);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    if (post.title.toLowerCase().includes(term.toLowerCase())) {
      template += `
    <div>
    <h2>${post.title}</h2>
    <p><small>${post.likes}</small></p>
    <p>${post.body.slice(0, 200)}</p>
    <a href="details.html?id=${post.id}">Plačiau</a>
    </div>
    `;
    }
  });

  container.innerHTML = template;
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts2(searchForm.term.value.trim());
});
