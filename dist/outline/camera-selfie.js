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
    e("path", { d: "M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" }, null, -1),
    e("path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }, null, -1),
    e("path", { d: "M15 11l.01 0" }, null, -1),
    e("path", { d: "M9 11l.01 0" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
