import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M3 21v-15l5 -3l5 3v15"></path><path d="M8 21v-7"></path><path d="M3 14h10"></path><path d="M6 10a2 2 0 1 1 4 0"></path><path d="M13 13c6 0 3 8 8 8"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
