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
    e("path", { d: "M17.464 6.518a6 6 0 1 0 -3.023 7.965" }, null, -1),
    e("path", { d: "M17.482 17.464a6 6 0 1 0 -7.965 -3.023" }, null, -1),
    e("path", { d: "M6.54 17.482a6 6 0 1 0 3.024 -7.965" }, null, -1),
    e("path", { d: "M6.518 6.54a6 6 0 1 0 7.965 3.024" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
