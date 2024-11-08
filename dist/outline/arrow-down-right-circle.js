import { openBlock as o, createElementBlock as r, createElementVNode as e } from "vue";
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
function l(i, t) {
  return o(), r("svg", n, t[0] || (t[0] = [
    e("path", { d: "M8.464 8.464l9.536 9.536" }, null, -1),
    e("path", { d: "M14 18h4v-4" }, null, -1),
    e("path", { d: "M8.414 8.414a2 2 0 1 0 -2.828 -2.828a2 2 0 0 0 2.828 2.828" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};