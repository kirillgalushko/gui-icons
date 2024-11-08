import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function a(n, t) {
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M3 7v4a1 1 0 0 0 1 1h3"></path><path d="M7 7v10"></path><path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z"></path><path d="M17 7v4a1 1 0 0 0 1 1h3"></path><path d="M21 7v10"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
