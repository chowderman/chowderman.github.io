const themeSwitcher = document.getElementById("theme-switcher-select");
const stylesheet = document.getElementById("theme-stylesheet");

const defaultThemeUrl = stylesheet.href.split("/");
const defaultTheme = defaultThemeUrl[defaultThemeUrl.length - 1];

setTheme(defaultTheme);

function setTheme(theme) {
  stylesheet.href = theme;
  switch (theme) {
    case "XP.css":
      document.querySelectorAll('[gui*="98"]').forEach(ele => {
        ele.removeAttribute("gui");
        ele.setAttribute("gui", "xp");
      });

      console.log(theme);
      document.querySelectorAll("details pre").forEach(ele => {
        ele.innerHTML = ele.innerHTML.split('<span class="hljs-string">"98"</span>').join('<span class="hljs-string">"xp"</span>');
      });
      break;

    case "98.css":
      document.querySelectorAll('[gui*="xp"]').forEach(ele => {
        ele.removeAttribute("gui");
        ele.setAttribute("gui", "98");
      });

      document.querySelectorAll("details pre").forEach(ele => {
        ele.innerHTML = ele.innerHTML.split('<span class="hljs-string">"xp"</span>').join('<span class="hljs-string">"98"</span>');
      });
      break;
  }
  document.getElementsByTagName("h1")[0].innerText = "OS.css (scoped)";
}

themeSwitcher.addEventListener("change", (e) => setTheme(e.target.value));
