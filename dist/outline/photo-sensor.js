import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M17 5h2a2 2 0 0 1 2 2v2"></path><path d="M21 15v2a2 2 0 0 1 -2 2h-2"></path><path d="M7 19h-2a2 2 0 0 1 -2 -2v-2"></path><path d="M3 9v-2a2 2 0 0 1 2 -2h2"></path><path d="M7 9m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
