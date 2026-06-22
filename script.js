const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    const body = document.body;

    if(body.getAttribute("data-theme") === "light"){

        body.setAttribute("data-theme","dark");
        themeBtn.textContent = "🌙";

    }else{

        body.setAttribute("data-theme","light");
        themeBtn.textContent = "☀️";

    }

});