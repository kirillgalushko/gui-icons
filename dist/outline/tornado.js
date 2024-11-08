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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M21 4l-18 0"></path><path d="M13 16l-6 0"></path><path d="M11 20l4 0"></path><path d="M6 8l14 0"></path><path d="M4 12l12 0"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
