{
  const welcome = () => {
    console.log("Siemanko! To moje pierwsze kroki w programowaniu.");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  };

  const init = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
