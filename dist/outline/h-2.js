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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"></path><path d="M4 6v12"></path><path d="M12 6v12"></path><path d="M11 18h2"></path><path d="M3 18h2"></path><path d="M4 12h8"></path><path d="M3 6h2"></path><path d="M11 6h2"></path>', 8)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
