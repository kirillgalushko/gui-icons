import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M4 16v-8l-2 2"></path><path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4"></path><path d="M7 16v.01"></path><path d="M17 16l4 -4"></path><path d="M21 16l-4 -4"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
