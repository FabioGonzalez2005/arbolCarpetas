document.addEventListener("DOMContentLoaded", () => {
    const tree = document.getElementById("file-tree");
    const searchForm = document.getElementById("search-ex");
    const searchInput = searchForm.querySelector("input");

});

document.querySelectorAll('.add-folder').forEach(btn => {
    btn.addEventListener('click', e => {
        const li = e.target.closest('li');
        li.classList.toggle('show-form');
    });
});