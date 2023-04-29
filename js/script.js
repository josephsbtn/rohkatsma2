// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

{
    "terminal.integrated.automationShell.windows": "Git Bash",
    "terminal.integrated.profiles.windows": {
        "PowerShell": {
          "source": "PowerShell",
          "icon": "terminal-powershell"
        },
        "Command Prompt": {
          "path": [
            "${env:windir}\\Sysnative\\cmd.exe",
            "${env:windir}\\System32\\cmd.exe"
          ],
          "args": [],
          "icon": "terminal-cmd"
        },
        "Git Bash": {
          // "source": "Git Bash"
          "path": "C:\\Program Files\\Git\\bin\bash.exe",
          "args": [
            "--login"
          ]
        },
      },
    }