var modal = document.getElementById('myModal'),
  rick = document.getElementById('rickRoll'),
  rickVideo = document.getElementById('rolled'),
  btn = document.getElementById('myBtn'),
  rBtn = document.getElementById('rickBtn'),
  span = document.getElementsByClassName('close')[1],
  spann = document.getElementsByClassName('close')[0];
(btn.onclick = function () {
  modal.style.display = 'block';
}),
  (rBtn.onclick = function () {
    (rick.style.display = 'block'), introMusic.pause(), rickVideo.play();
  }),
  (span.onclick = function () {
    modal.style.display = 'none';
  }),
  (spann.onclick = function () {
    (rick.style.display = 'none'), introMusic.play(), rickVideo.pause();
  }),
  (window.onclick = function (n) {
    n.target == modal && (modal.style.display = 'none'),
      n.target == rick &&
        ((rick.style.display = 'none'), introMusic.play(), rickVideo.pause());
  });
