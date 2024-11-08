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
    o('<path d="M9 8v-1h-6v1"></path><path d="M6 15v-8"></path><path d="M21 15l-5 -8"></path><path d="M16 15l5 -8"></path><path d="M14 11h-4v8h4"></path><path d="M10 15h3"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
