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
function a(n, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    r('<path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path><path d="M4 16v2a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v2"></path><path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9.5 15.05a3.5 3.5 0 0 1 5 0"></path>', 7)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
