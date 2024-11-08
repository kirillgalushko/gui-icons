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
function l(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M4 20l3 0"></path><path d="M14 20l7 0"></path><path d="M6.9 15l6.9 0"></path><path d="M10.2 6.3l5.8 13.7"></path><path d="M5 20l6 -16l2 0l7 16"></path>', 5)
  ]));
}
const p = { render: l };
export {
  p as default,
  l as render
};
