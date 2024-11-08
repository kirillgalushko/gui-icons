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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M1.5 19l18 -18"></path><path d="M4.5 22l18 -18"></path><path d="M18 15l3 4"></path><path d="M23 15l-4.5 8"></path><path d="M1 1l6 6"></path><path d="M1 7l6 -6"></path>', 6)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
