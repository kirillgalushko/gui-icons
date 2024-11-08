import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const n = {
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
function h(i, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", { d: "M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6" }, null, -1)
  ]));
}
const m = { render: h };
export {
  m as default,
  h as render
};
