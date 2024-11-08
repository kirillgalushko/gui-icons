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
    o('<path d="M2 9l3 5.063"></path><path d="M8 9l-4.8 9"></path><path d="M16 9l3 5.063"></path><path d="M22 9l-4.8 9"></path><path d="M10 12h4"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
