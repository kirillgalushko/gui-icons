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
function i(l, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", { d: "M6.141 4.163l12 1.714a1 1 0 0 1 .859 .99v10.266a1 1 0 0 1 -.859 .99l-12 1.714a1 1 0 0 1 -1.141 -.99v-13.694a1 1 0 0 1 1.141 -.99z" }, null, -1)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};