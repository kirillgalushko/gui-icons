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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }, null, -1),
    e("path", { d: "M11.114 11.133a3 3 0 1 0 3.754 3.751" }, null, -1),
    e("path", { d: "M12 7v.01" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
