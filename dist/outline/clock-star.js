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
    e("path", { d: "M20.982 11.436a9 9 0 1 0 -9.966 9.51" }, null, -1),
    e("path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" }, null, -1),
    e("path", { d: "M12 7v5l1 1" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};