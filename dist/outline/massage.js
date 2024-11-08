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
function a(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M4 22l4 -2v-3h12"></path><path d="M11 20h9"></path><path d="M8 14l3 -2l1 -4c3 1 3 4 3 6"></path>', 5)
  ]));
}
const l = { render: a };
export {
  l as default,
  a as render
};
