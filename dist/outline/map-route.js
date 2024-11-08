import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
const l = {
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
function h(n, t) {
  return e(), o("svg", l, t[0] || (t[0] = [
    r('<path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13"></path><path d="M9 12v.01"></path><path d="M6 13v.01"></path><path d="M17 15l-4 -4"></path><path d="M13 15l4 -4"></path>', 5)
  ]));
}
const a = { render: h };
export {
  a as default,
  h as render
};
