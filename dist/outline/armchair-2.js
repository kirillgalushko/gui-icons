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
    o('<path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"></path><path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"></path><path d="M8 12h8"></path><path d="M7 19v2"></path><path d="M17 19v2"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
