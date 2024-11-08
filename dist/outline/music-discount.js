import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const n = {
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
function r(i, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M9 17v-13h10v9"></path><path d="M9 8h10"></path><path d="M16 21l5 -5"></path><path d="M21 21v.01"></path><path d="M16 16v.01"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
