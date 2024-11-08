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
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M10 6h3a6 6 0 0 1 6 6v3m-.129 3.872a3 3 0 0 1 -2.871 2.128h-8a3 3 0 0 1 -3 -3v-6a5.99 5.99 0 0 1 2.285 -4.712" }, null, -1),
    e("path", { d: "M10 6v-1a2 2 0 1 1 4 0v1" }, null, -1),
    e("path", { d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
