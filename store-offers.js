// Add <script src="store-offers.js"></script> at the end of index.html
// and make sure the container below exists: <div id="offers"></div>
(function () {
  let offers = [];
  try { offers = JSON.parse(localStorage.getItem("epic_offers")) || []; } catch (e) {}
  const box = document.getElementById("offers");
  if (!box) return;
  box.innerHTML = "";
  offers.forEach(o => {
    const card = document.createElement("div");
    card.className = "card";
    // photo only shown if one was added
    if (o.photo) {
      const img = document.createElement("img");
      img.src = o.photo;
      img.style.cssText = "width:100%;border-radius:12px;margin-bottom:12px";
      card.appendChild(img);
    }
    const h = document.createElement("h3"); h.textContent = o.title;
    const y = document.createElement("p"); y.textContent = o.year ? "Created: " + o.year : "";
    const d = document.createElement("p"); d.textContent = o.desc;
    const p = document.createElement("div"); p.textContent = o.price + " MAD";
    p.style.cssText = "font-size:28px;font-weight:700;margin:12px 0";
    const b = document.createElement("button"); b.textContent = "Buy";
    card.append(h, y, d, p, b);
    box.appendChild(card);
  });
})();
