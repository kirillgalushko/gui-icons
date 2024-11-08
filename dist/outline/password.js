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
function a(p, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 10v4"></path><path d="M10 13l4 -2"></path><path d="M10 11l4 2"></path><path d="M5 10v4"></path><path d="M3 13l4 -2"></path><path d="M3 11l4 2"></path><path d="M19 10v4"></path><path d="M17 13l4 -2"></path><path d="M17 11l4 2"></path>', 9)
  ]));
}
const n = { render: a };
export {
  n as default,
  a as render
};
