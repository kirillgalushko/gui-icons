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
function l(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9"></path><path d="M9 4v13"></path><path d="M15 7v6.5"></path><path d="M20 21l2 -2l-2 -2"></path><path d="M17 17l-2 2l2 2"></path>', 5)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};