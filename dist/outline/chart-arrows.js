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
function l(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M3 18l14 0"></path><path d="M9 9l3 3l-3 3"></path><path d="M14 15l3 3l-3 3"></path><path d="M3 3l0 18"></path><path d="M3 12l9 0"></path><path d="M18 3l3 3l-3 3"></path><path d="M3 6l18 0"></path>', 7)
  ]));
}
const p = { render: l };
export {
  p as default,
  l as render
};
