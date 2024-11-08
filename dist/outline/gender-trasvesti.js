import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
const o = {
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
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10z" }, null, -1),
    e("path", { d: "M6 6l5.4 5.4" }, null, -1),
    e("path", { d: "M4 8l4 -4" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
