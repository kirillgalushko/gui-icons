import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const h = {
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
function l(r, t) {
  return n(), o("svg", h, t[0] || (t[0] = [
    e("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, null, -1),
    e("path", { d: "M3 15h3v4.5a1.5 1.5 0 0 1 -3 0" }, null, -1),
    e("path", { d: "M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" }, null, -1),
    e("path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
