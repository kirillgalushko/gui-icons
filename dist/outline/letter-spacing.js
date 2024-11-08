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
function n(l, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"></path><path d="M13 4l3 8l3 -8"></path><path d="M5 18h14"></path><path d="M17 20l2 -2l-2 -2"></path><path d="M7 16l-2 2l2 2"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
