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
function l(a, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" }, null, -1),
    e("path", { d: "M9 6m0 3a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3z" }, null, -1),
    e("path", { d: "M9 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M18 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
