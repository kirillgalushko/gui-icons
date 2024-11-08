import { openBlock as t, createElementBlock as o, createElementVNode as l } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    l("path", { d: "M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
