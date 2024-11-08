import { openBlock as e, createElementBlock as h, createStaticVNode as n } from "vue";
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
function r(a, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    n('<path d="M6 18v-3"></path><path d="M10 18v-6"></path><path d="M14 18v-4"></path><path d="M14 10v-1"></path><path d="M18 14v-8"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
