import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M5 11h14v-3h-14z" }, null, -1),
    e("path", { d: "M17.5 11l-1.5 10h-8l-1.5 -10" }, null, -1),
    e("path", { d: "M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" }, null, -1),
    e("path", { d: "M15 5v-2" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
