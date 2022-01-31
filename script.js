let darkMode = localStorage.getItem("darkMode");
//kaydolan tercihlerin kaybolmaması için localStorage'a saklıyoruz
const darkModeToggler = document.querySelector("#dark-mode-toggler");
darkModeToggler.addEventListener("change", () => {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enable") enableDarkMode();
    else disableDarkMode();
})

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enable");
}
const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
}
if(darkMode==="enable"){
    enableDarkMode();
    darkModeToggler.checked = true;
}


