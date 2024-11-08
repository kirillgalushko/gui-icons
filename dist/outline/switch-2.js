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
function r(h, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" }, null, -1),
    e("path", { d: "M18 4l3 3l-3 3" }, null, -1),
    e("path", { d: "M3 7h5l7 10h6" }, null, -1),
    e("path", { d: "M18 20l3 -3l-3 -3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
