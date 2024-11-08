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
function n(a, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M17 3v6"></path><path d="M10 18l-3 3l-3 -3"></path><path d="M7 21v-18"></path><path d="M20 6l-3 -3l-3 3"></path><path d="M17 21v-2"></path><path d="M17 15v-2"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
