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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"></path><path d="M8 6l0 12"></path><path d="M8 12l6 0"></path><path d="M9 3l0 3"></path><path d="M13 3l0 3"></path><path d="M9 18l0 3"></path><path d="M13 18l0 3"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};
