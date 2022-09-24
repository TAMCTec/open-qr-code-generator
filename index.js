
function getValue(id) {
  let el = document.getElementById(id);

  if (!el.value) {
    alert(`Input the ${id} of the barcode`);
    el.focus();
    return false;
  }
  return el.value;
}

function makeCode() {
  let text = getValue('text');
  if (!text) return;
  let width = getValue('width');
  if (!width) return;
  let height = getValue('height');
  if (!height) return;

  document.getElementById("qrcode").innerHTML = "";
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: width,
    height: height,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
  // qrcode.clear();
  // qrcode.makeCode();
}

function download() {
  data = document.getElementById("qrcode").childNodes[1].src;
  var link = document.createElement('a');
  link.download = 'qrcode.png';
  link.href = data;
  link.click();
}

document.querySelector("#generate").addEventListener("click", makeCode);

document.getElementById("download").addEventListener("click", download);