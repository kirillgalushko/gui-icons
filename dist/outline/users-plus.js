import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
function n(a, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M16 19h6"></path><path d="M19 16v6"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
