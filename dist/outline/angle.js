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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M21 19h-18l9 -15"></path><path d="M20.615 15.171h.015"></path><path d="M19.515 11.771h.015"></path><path d="M17.715 8.671h.015"></path><path d="M15.415 5.971h.015"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
