import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M7 21v-6"></path><path d="M20 6l-3 -3l-3 3"></path><path d="M10 18l-3 3l-3 -3"></path><path d="M7 3v2"></path><path d="M7 9v2"></path><path d="M17 3v6"></path><path d="M17 21v-2"></path><path d="M17 15v-2"></path>', 8)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};