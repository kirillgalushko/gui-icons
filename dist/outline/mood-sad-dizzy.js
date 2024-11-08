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
function a(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0"></path><path d="M8 9l2 2"></path><path d="M10 9l-2 2"></path><path d="M14 9l2 2"></path><path d="M16 9l-2 2"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
