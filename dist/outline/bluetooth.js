import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const l = {
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
  return t(), o("svg", l, e[0] || (e[0] = [
    r("path", { d: "M7 8l10 8l-5 4l0 -16l5 4l-10 8" }, null, -1)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
