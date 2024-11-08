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
function h(l, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" }, null, -1),
    e("path", { d: "M9 18v3h6v-3" }, null, -1),
    e("path", { d: "M9 6v-3h6v3" }, null, -1),
    e("path", { d: "M12 10a2 2 0 1 0 2 2" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
