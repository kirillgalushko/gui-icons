import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function n(r, t) {
  return e(), o("svg", a, t[0] || (t[0] = [
    h('<path d="M15 21h-8a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.265 0 .518 .052 .75 .145"></path><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M8 11v-4a4 4 0 1 1 8 0v4"></path><path d="M19 22v.01"></path><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
