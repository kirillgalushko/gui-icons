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
    e("path", { d: "M14.5 16h-10.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" }, null, -1),
    e("path", { d: "M7 20h6" }, null, -1),
    e("path", { d: "M9 16v4" }, null, -1),
    e("path", { d: "M19 16l-2 3h4l-2 3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
