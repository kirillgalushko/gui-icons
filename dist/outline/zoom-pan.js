import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const n = {
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
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M17 17l-2.5 -2.5"></path><path d="M10 4l2 -2l2 2"></path><path d="M20 10l2 2l-2 2"></path><path d="M4 10l-2 2l2 2"></path><path d="M10 20l2 2l2 -2"></path>', 6)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
