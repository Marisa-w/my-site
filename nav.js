const navContainer = document.querySelector("#site-nav");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navContainer.innerHTML = `
  <nav class="site-nav" aria-label="Main navigation">
    <a href="index.html">Home</a>
    <a href="quotes.html">Quotes</a>
    <a href="project.html">Project Ideas</a>
    <a href="machine.html">Useless Machine</a>
  </nav>
`;

const currentLink = navContainer.querySelector(`a[href="${currentPage}"]`);
if (currentLink) {
  currentLink.setAttribute("aria-current", "page");
}