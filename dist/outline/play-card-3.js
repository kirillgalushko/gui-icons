import { openBlock as n, createElementBlock as h, createElementVNode as e } from "vue";
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
function r(l, t) {
  return n(), h("svg", o, t[0] || (t[0] = [
    e("path", { d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }, null, -1),
    e("path", { d: "M8 6h.01" }, null, -1),
    e("path", { d: "M16 18h.01" }, null, -1),
    e("path", { d: "M10 9h2.5a1.5 1.5 0 0 1 0 3h-1.5h1.5a1.5 1.5 0 0 1 0 3h-2.5" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
