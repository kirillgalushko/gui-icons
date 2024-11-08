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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3"></path><path d="M7 9v2a1 1 0 0 0 1 1h1"></path><path d="M10 9v6"></path><path d="M7.5 4.2v.01"></path><path d="M4.2 7.5v.01"></path><path d="M3 12a9 9 0 1 0 9 -9"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};