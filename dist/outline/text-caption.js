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
function h(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 15h16" }, null, -1),
    e("path", { d: "M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" }, null, -1),
    e("path", { d: "M4 20h12" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
