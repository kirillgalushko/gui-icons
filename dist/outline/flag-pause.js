import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
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
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M13.536 15.029a4.987 4.987 0 0 1 -1.536 -1.029a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5" }, null, -1),
    e("path", { d: "M5 21v-7" }, null, -1),
    e("path", { d: "M17 17v5" }, null, -1),
    e("path", { d: "M21 17v5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
