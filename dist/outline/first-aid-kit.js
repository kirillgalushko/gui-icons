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
function i(l, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" }, null, -1),
    e("path", { d: "M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }, null, -1),
    e("path", { d: "M10 14h4" }, null, -1),
    e("path", { d: "M12 12v4" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
