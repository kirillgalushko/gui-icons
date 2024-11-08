import { openBlock as e, createElementBlock as l, createStaticVNode as o } from "vue";
const r = {
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
function h(n, t) {
  return e(), l("svg", r, t[0] || (t[0] = [
    o('<path d="M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path><path d="M11 7l4 0"></path><path d="M9 11l2 0"></path><path d="M13 15l2 0"></path><path d="M15 11l0 .01"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};
