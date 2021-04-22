//lines

const findPoint = (cx, cy, rad, cornerGrad) => {
  const cornerRad = (cornerGrad * Math.PI) / 180;
  const nx = Math.cos(cornerRad) * rad + cx;
  const ny = Math.sin(cornerRad) * rad + cy;

  return { x: nx, y: ny };
};

const rays = () => {
  findPoint();
  const n = 5;
  const corner = 360 / n;
  const lineLength = 3000;
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const cr = 0;

  for (let i = 1; i <= n; i++) {
    const pointPosition1 = findPoint(cx, cy, cr + lineLength, corner * i);
    const pointPosition2 = findPoint(cx, cy, cr, corner * i);
    const linePath =
      "M" +
      pointPosition1.x.toFixed(0) +
      "," +
      pointPosition1.y.toFixed(0) +
      " L" +
      pointPosition2.x.toFixed(0) +
      "," +
      pointPosition2.y.toFixed(0);

    const svg = document.getElementById("object");
    const newElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newElement.id = `line${i}`;
    newElement.setAttribute("class", "line");
    newElement.setAttribute("d", linePath);
    newElement.style.strokeWidth = "5px";
    svg.appendChild(newElement);
  }

  for (let i = 1; i <= n; i++) {
    const pointPosition1 = findPoint(cx, cy, cr + lineLength, corner * i);
    const pointPosition2 = findPoint(cx, cy, cr, corner * i);
    const linePath =
      "M" +
      pointPosition1.x.toFixed(0) +
      "," +
      pointPosition1.y.toFixed(0) +
      " L" +
      pointPosition2.x.toFixed(0) +
      "," +
      pointPosition2.y.toFixed(0);

    const svg = document.getElementById("object");
    const newElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newElement.id = `linex${i}`;
    newElement.setAttribute("class", "linex");
    newElement.setAttribute("d", linePath);
    newElement.style.strokeWidth = "1px";
    svg.appendChild(newElement);
  }
};

const renew = () => {
  const svg = document.getElementById("object");
  const parentElement = svg.parentElement;
  const emptySvg = svg.cloneNode(false);

  parentElement.removeChild(svg);
  parentElement.appendChild(emptySvg);
};

rays();

window.addEventListener("resize", function () {
  renew();
  rays();
});
