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
    r('<path d="M6 5l0 14"></path><path d="M10 5l0 14"></path><path d="M14 5l0 14"></path><path d="M18 5l0 14"></path><path d="M3 17l18 -10"></path>', 5)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
