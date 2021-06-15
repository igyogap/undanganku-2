var countDate = new Date('may 3, 2022 01:26:00');
function resepsi() {
  var now = new Date().getTime();
  gap = countDate - now;

  var detik = 1000;
  var menit = detik * 60;
  var jam = menit * 60;
  var hari = jam * 24;

  var d = Math.floor(gap / hari);
  var h = Math.floor((gap % hari) / jam);
  var m = Math.floor((gap % jam) / menit);
  var s = Math.floor((gap % menit) / detik);

  document.getElementById('hari').innerText = d;
  document.getElementById('jam').innerText = h;
  document.getElementById('menit').innerText = m;
  document.getElementById('detik').innerText = s;

  if (gap < 0) {
    clearInterval(x);
    document.getElementById('hari').innerHTML = 0;
    document.getElementById('jam').innerHTML = 0;
    document.getElementById('menit').innerHTML = 0;
    document.getElementById('detik').innerHTML = 0;
  }
}

var x = setInterval(function () {
  resepsi();
}, 1000);
