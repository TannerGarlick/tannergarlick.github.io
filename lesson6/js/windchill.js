const t = parseFloat(document.querySelector("#temp").textContent);
const s = parseFloat(document.querySelector("#wind").textContent);
var f;

if (t >= 50 || s >= 3) {
  f = 35.74 + 0.6215 * t - 35.75 * s ^ (0.16) + 0.4275 * t * s ^ (0.16);
  document.write(f);
} else {
  document.write("N/A");
}
