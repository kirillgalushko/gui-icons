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
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M5 6v12"></path><path d="M5 12c3.5 0 6 -3 6 -6"></path><path d="M5 12c3.5 0 6 3 6 6"></path><path d="M19 6l-2 2l-2 -2"></path><path d="M19 12h-2a3 3 0 0 0 0 6h2"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};