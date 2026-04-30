document.addEventListener("DOMContentLoaded", () => {

  //console.log("JS carregou muehehehehe");

  const cat = document.createElement("div");

  // 🌙 fases da lua
  const luas = ["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"];

  let fase = 0;

  cat.innerText = luas[fase];

  cat.style.position = "fixed";
  cat.style.left = "100px";
  cat.style.top = "100px";
  cat.style.fontSize = "40px";
  cat.style.zIndex = "999999";
  cat.style.cursor = "pointer";

  document.body.appendChild(cat);

  let x = 100;
  let y = 100;
  let dx = 0.5;
  let dy = 0.3;

  function moveCat(){
    x += dx;
    y += dy;

    if(x <= 0 || x >= window.innerWidth - 40) dx *= -1;
    if(y <= 0 || y >= window.innerHeight - 40) dy *= -1;

    cat.style.left = x + "px";
    cat.style.top = y + "px";

    requestAnimationFrame(moveCat);
  }

  moveCat();

  // 🌙 troca de fase a cada 400ms
  setInterval(() => {
    fase = (fase + 1) % luas.length;
    cat.innerText = luas[fase];
  }, 400);

  cat.addEventListener("click", () => {
    window.location.href = "pages/powerlift.html";
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const pupilas = document.querySelectorAll(".pupila");

  if(pupilas.length === 0) return;

  document.addEventListener("mousemove", (e) => {

    pupilas.forEach(pupila => {

      const rect = pupila.getBoundingClientRect();

      const centroX = rect.left + rect.width / 2;
      const centroY = rect.top + rect.height / 2;

      const angulo = Math.atan2(
        e.clientY - centroY,
        e.clientX - centroX
      );

      const raio = 5;

      const x = Math.cos(angulo) * raio;
      const y = Math.sin(angulo) * raio;

      pupila.style.transform = `translate(${x}px, ${y}px)`;

    });

  });

});