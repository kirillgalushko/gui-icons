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
function r(a, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" }, null, -1),
    e("path", { d: "M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v.199m0 4v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2a8.09 8.09 0 0 1 1.35 -4.474m1.336 -2.63a7.822 7.822 0 0 0 .314 -2.196" }, null, -1),
    e("path", { d: "M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 .866 -.142" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
