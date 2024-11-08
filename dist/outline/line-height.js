import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function l(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M3 8l3 -3l3 3"></path><path d="M3 16l3 3l3 -3"></path><path d="M6 5l0 14"></path><path d="M13 6l7 0"></path><path d="M13 12l7 0"></path><path d="M13 18l7 0"></path>', 6)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
