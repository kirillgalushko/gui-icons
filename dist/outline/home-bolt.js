import { openBlock as o, createElementBlock as l, createElementVNode as e } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(h, t) {
  return o(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815" }, null, -1),
    e("path", { d: "M19 14l-2 4h4l-2 4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
