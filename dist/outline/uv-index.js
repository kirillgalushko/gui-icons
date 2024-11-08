import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
const o = {
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
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" }, null, -1),
    e("path", { d: "M12 4v-1" }, null, -1),
    e("path", { d: "M13 16l2 5h1l2 -5" }, null, -1),
    e("path", { d: "M6 16v3a2 2 0 1 0 4 0v-3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
