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
    e("path", { d: "M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }, null, -1),
    e("path", { d: "M16 18h.01" }, null, -1),
    e("path", { d: "M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
