import { openBlock as e, createElementBlock as h, createStaticVNode as r } from "vue";
const o = {
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
function a(l, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    r('<path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M3 12l18 0"></path><path d="M6 16l0 2"></path><path d="M10 16l0 6"></path><path d="M14 16l0 2"></path><path d="M18 16l0 4"></path>', 7)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
