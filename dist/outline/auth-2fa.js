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
function n(a, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54"></path><path d="M10 16v-8h4"></path><path d="M10 12l3 0"></path><path d="M17 16v-6a2 2 0 0 1 4 0v6"></path><path d="M17 13l4 0"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
