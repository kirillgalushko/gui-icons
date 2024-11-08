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
    r('<path d="M9 3l6 6"></path><path d="M9 9l6 -6"></path><path d="M9 15l3 4.5"></path><path d="M15 15l-4.5 7"></path><path d="M5 12h14"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
