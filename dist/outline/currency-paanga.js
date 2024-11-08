import { openBlock as e, createElementBlock as r, createStaticVNode as h } from "vue";
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
function n(a, t) {
  return e(), r("svg", o, t[0] || (t[0] = [
    h('<path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"></path><path d="M17 20v-2"></path><path d="M18 6v-2"></path><path d="M3 6h8"></path><path d="M7 6v12"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
