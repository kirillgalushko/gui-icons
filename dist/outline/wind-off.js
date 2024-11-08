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
    o('<path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24"></path><path d="M3 12h9"></path><path d="M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282"></path><path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
