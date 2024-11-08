import { openBlock as e, createElementBlock as o, createStaticVNode as a } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    a('<path d="M13 17a4 4 0 1 0 8 0"></path><path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M11 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M7 7c0 3 2 5 2 9"></path><path d="M15 7c0 4 -2 6 -2 10"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
