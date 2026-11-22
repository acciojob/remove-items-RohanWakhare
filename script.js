document.querySelector('input[type="button"]').addEventListener("click", function () {
    const select = document.getElementById("colorSelect");
    select.options[select.selectedIndex].remove();
});