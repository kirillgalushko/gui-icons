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
    o('<path d="M13 16.5v-7.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5"></path><path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8"></path><path d="M19 22v-6"></path><path d="M22 19l-3 -3l-3 3"></path><path d="M16 9h2"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
