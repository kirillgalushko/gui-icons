import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M14.505 14.497l-2.505 1.503l-5 -3v4l5 3l5 -3" }, null, -1),
    e("path", { d: "M13.873 9.876l3.127 -1.876v-4l-5 3l-2.492 -1.495m-2.508 1.495v1l2.492 1.495" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
