let menu = document.getElementById("menu");
menu.style.height = "0px";
menu.style.border = "none";
function toggleMenu() {
    if (menu.style.height == "0px") {
        menu.style.height = "300px";
        menu.style.width = "120px";
    }
    else {
        menu.style.height = "0px";
        menu.style.width = "0px";
    }
}