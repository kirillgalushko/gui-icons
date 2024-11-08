import { openBlock as h, createElementBlock as e, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function a(p, t) {
  return h(), e("svg", r, t[0] || (t[0] = [
    o('<path d="M4 12h.01"></path><path d="M4 6h.01"></path><path d="M4 18h.01"></path><path d="M8 18h2"></path><path d="M8 12h2"></path><path d="M8 6h2"></path><path d="M14 6h6"></path><path d="M14 12h6"></path><path d="M14 18h6"></path>', 9)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
