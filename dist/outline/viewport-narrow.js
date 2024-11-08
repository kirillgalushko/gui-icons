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
    o('<path d="M3 12h7l-3 -3"></path><path d="M7 15l3 -3"></path><path d="M21 12h-7l3 -3"></path><path d="M17 15l-3 -3"></path><path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1"></path><path d="M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1"></path>', 6)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
