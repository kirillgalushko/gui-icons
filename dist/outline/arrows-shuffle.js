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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(h, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M18 4l3 3l-3 3" }, null, -1),
    e("path", { d: "M18 20l3 -3l-3 -3" }, null, -1),
    e("path", { d: "M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" }, null, -1),
    e("path", { d: "M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
