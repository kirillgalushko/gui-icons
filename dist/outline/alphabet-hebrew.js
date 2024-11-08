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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M7 6c2.333 5.143 6.611 6.857 9.333 12" }, null, -1),
    e("path", { d: "M13.667 14c2.505 -1.5 2.666 -4.141 2.666 -5.333c0 -1.778 -.443 -2.667 -.443 -2.667" }, null, -1),
    e("path", { d: "M7.485 18s-.485 -.905 -.485 -2.714c0 -1.172 .164 -3.722 2.641 -5.27" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
