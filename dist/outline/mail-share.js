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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(h, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" }, null, -1),
    e("path", { d: "M3 7l9 6l9 -6" }, null, -1),
    e("path", { d: "M16 22l5 -5" }, null, -1),
    e("path", { d: "M21 21.5v-4.5h-4.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
