import { openBlock as l, createElementBlock as o, createElementVNode as e } from "vue";
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
function r(h, t) {
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01" }, null, -1),
    e("path", { d: "M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" }, null, -1),
    e("path", { d: "M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5" }, null, -1),
    e("path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};