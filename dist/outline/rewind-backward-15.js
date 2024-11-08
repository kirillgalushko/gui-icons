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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" }, null, -1),
    e("path", { d: "M15 18a6 6 0 1 0 0 -12h-11" }, null, -1),
    e("path", { d: "M5 14v6" }, null, -1),
    e("path", { d: "M7 9l-3 -3l3 -3" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
