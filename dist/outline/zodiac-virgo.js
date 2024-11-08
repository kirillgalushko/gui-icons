import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return o(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M3 4a2 2 0 0 1 2 2v9" }, null, -1),
    e("path", { d: "M5 6a2 2 0 0 1 4 0v9" }, null, -1),
    e("path", { d: "M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" }, null, -1),
    e("path", { d: "M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
