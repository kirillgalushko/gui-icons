import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(d, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M20.978 11.372a9 9 0 1 0 -1.593 5.773" }, null, -1),
    e("path", { d: "M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" }, null, -1),
    e("path", { d: "M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" }, null, -1),
    e("path", { d: "M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
