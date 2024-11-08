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
function a(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M10 12h-7l3 -3"></path><path d="M6 15l-3 -3"></path><path d="M14 12h7l-3 -3"></path><path d="M18 15l3 -3"></path><path d="M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1"></path><path d="M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
