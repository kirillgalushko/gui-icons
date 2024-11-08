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
    e("path", { d: "M4 13h5" }, null, -1),
    e("path", { d: "M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" }, null, -1),
    e("path", { d: "M20 8v8" }, null, -1),
    e("path", { d: "M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
