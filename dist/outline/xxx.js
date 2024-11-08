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
function n(l, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M10 8l4 8"></path><path d="M10 16l4 -8"></path><path d="M17 8l4 8"></path><path d="M17 16l4 -8"></path><path d="M3 8l4 8"></path><path d="M3 16l4 -8"></path>', 6)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
