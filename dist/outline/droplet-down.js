import { openBlock as o, createElementBlock as l, createElementVNode as e } from "vue";
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
function r(i, t) {
  return o(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M18.602 12.003a6.66 6.66 0 0 0 -.538 -1.126l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.159 7.159 0 0 0 4.972 1.564" }, null, -1),
    e("path", { d: "M19 16v6" }, null, -1),
    e("path", { d: "M22 19l-3 3l-3 -3" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
