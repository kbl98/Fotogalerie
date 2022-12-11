let photos = [
  "img/1.jpeg",
  "img/2.jpeg",
  "img/3.jpeg",
  "img/4.jpeg",
  "img/5.jpeg",
  "img/6.jpeg",
  "img/7.jpeg",
  "img/8.jpeg",
  "img/9.jpeg",
  "img/10.jpeg",
  "img/11.jpeg",
  "img/12.jpeg",
  "img/13.jpeg",
  "img/14.jpeg",
  "img/15.jpeg",
  "img/16.jpeg",
  "img/17.jpeg",
  "img/18.jpeg",
  "img/19.jpeg",
  "img/20.jpeg",
  "img/21.jpeg",
  "img/22.jpeg",
  "img/23.jpeg",
  "img/24.jpeg",
  "img/25.jpeg",
  "img/26.jpeg",
  "img/27.jpeg",
  "img/28.jpeg",
  "img/29.jpeg",
  "img/30.jpeg",
  "img/32.jpeg",
  "img/31.jpeg",
  "img/33.jpeg",
  "img/34.jpeg",
  "img/35.jpeg",
  "img/36.jpeg",
  "img/37.jpeg",
  "img/38.jpeg",
  "img/39.jpeg",
  "img/40.jpeg",
  "img/41.jpeg",
  "img/42.jpeg",
  "img/43.jpeg",
  "img/44.jpeg",
  "img/45.jpeg",
  "img/46.jpeg",
  "img/47.jpeg",
  "img/48.jpeg",
  "img/49.jpeg",
  "img/50.jpeg",
  "img/51.jpeg",
  "img/52.jpeg",
  "img/53.jpeg",
  "img/54.jpeg",
  "img/55.jpeg",
  "img/56.jpeg",
  "img/57.jpeg",
  "img/58.jpeg",
  "img/59.jpeg",
  "img/60.jpeg",
  "img/61.jpeg",
  "img/62.jpeg",
  "img/63.jpeg",
  "img/64.jpeg",
  "img/66.jpeg",
  "img/67.jpeg",
  "img/68.jpeg",
  "img/70.jpeg",
  "img/71.jpeg",
  "img/73.jpeg",
  "img/80.jpeg",
  "img/81.jpeg",
  "img/83.jpeg",
  "img/84.jpeg",
  "img/85.jpeg",
  "img/86.jpeg",
  "img/87.jpeg",
  "img/88.jpeg",
  "img/89.jpeg",
  "img/90.jpeg",
];

function load() {
  photos.sort(function () {
    return Math.random() - 0.5;
  });
  if (
    document.getElementById("select-container").classList.contains("d-none") ==
    false
  ) {
    dNoneToggle();
  }

  let content = document.getElementById("content");
  content.innerHTML = "";
  for (let i = 0; i < photos.length; i++) {
    content.innerHTML += `
        <a href="#" onclick=zoomPhoto(${i})><img id="photo"src="${photos[i]}"></a>
        `;
  }
}

function zoomPhoto(i) {
  dNoneToggle();
  let selected = document.getElementById("select-container");
  selected.innerHTML = "";
  let source = photos[i];
  let next = i + 1;
  let back = i - 1;
  selected.innerHTML = `<img class="" id="selected" src="${source}">
    <div id="bt-box">
    <button onclick="dNoneToggle()" id="button" class="button">X</button>
    <button onclick="back(${back})" id="button" class="button"><<</button>
    <button onclick="next(${next})" id="button" class="button">>></button>
  </div>`;
}

function next(i) {
  if (i < photos.length) {
    dNoneToggle();
    zoomPhoto(i);
  }
}

function back(i) {
  if (i >= 0) {
    dNoneToggle();
    zoomPhoto(i);
  }
}

function dNoneToggle() {
  document.getElementById("select-container").classList.toggle("d-none");
}
