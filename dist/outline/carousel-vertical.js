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
    e("path", { d: "M19 8v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1z" }, null, -1),
    e("path", { d: "M7 22v-1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v1" }, null, -1),
    e("path", { d: "M17 2v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1" }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
