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
function l(d, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    e("path", { d: "M14.5 16.05a3.5 3.5 0 0 0 -5 0" }, null, -1),
    e("path", { d: "M10 9.25c-.5 1 -2.5 1 -3 0" }, null, -1),
    e("path", { d: "M17 9.25c-.5 1 -2.5 1 -3 0" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
