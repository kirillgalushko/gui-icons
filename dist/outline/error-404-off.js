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
    o('<path d="M3 7v4a1 1 0 0 0 1 1h3"></path><path d="M7 7v10"></path><path d="M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2m0 -4v-2a1 1 0 0 0 -1 -1h-2"></path><path d="M17 7v4a1 1 0 0 0 1 1h3"></path><path d="M21 7v10"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
