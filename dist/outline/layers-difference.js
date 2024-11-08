import { openBlock as e, createElementBlock as r, createStaticVNode as h } from "vue";
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
function l(a, t) {
  return e(), r("svg", o, t[0] || (t[0] = [
    h('<path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2"></path><path d="M10 8l-2 0l0 2"></path><path d="M8 14l0 2l2 0"></path><path d="M14 8l2 0l0 2"></path><path d="M16 14l0 2l-2 0"></path>', 5)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
