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
function l(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M6 3l-3 3"></path><path d="M21 18l-3 3"></path><path d="M11 3l-8 8"></path><path d="M16 3l-13 13"></path><path d="M21 3l-18 18"></path><path d="M21 8l-13 13"></path><path d="M21 13l-8 8"></path>', 7)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
