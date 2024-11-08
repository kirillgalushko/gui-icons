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
    e("path", { d: "M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5" }, null, -1),
    e("path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }, null, -1),
    e("path", { d: "M19 16l-2 3h4l-2 3" }, null, -1),
    e("path", { d: "M16 9h2" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
