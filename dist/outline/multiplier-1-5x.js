import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
const h = {
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
function i(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M4 16v-8l-2 2"></path><path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4"></path><path d="M7 16v.01"></path><path d="M17 16l4 -4"></path><path d="M21 16l-4 -4"></path>', 5)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};
