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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M2 5c7.109 4.1 10.956 10.131 12 14c1.074 -4.67 4.49 -8.94 8 -11" }, null, -1),
    e("path", { d: "M14 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M7 9c-.278 5.494 -2.337 7.33 -4 10c4.013 -2 6.02 -5 15.05 -5c4.012 0 3.51 2.5 1 3c2 .5 2.508 5 -2.007 2" }, null, -1)
  ]));
}
const c = { render: l };
export {
  c as default,
  l as render
};
