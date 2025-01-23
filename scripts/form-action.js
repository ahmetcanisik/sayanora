document.addEventListener('DOMContentLoaded', async () => {
    const table = new Table(document.getElementById('result'));

    document.getElementById("myform").addEventListener("submit", async (e) => {
        e.preventDefault();

        table.update(Object.fromEntries(new FormData(e.target)));
    });
});