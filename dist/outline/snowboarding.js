import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M15 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M7 19l4 -2.5l-.5 -1.5"></path><path d="M16 21l-1 -6l-4.5 -3l3.5 -6"></path><path d="M7 9l1.5 -3h5.5l2 4l3 1"></path><path d="M3 17c.399 1.154 .899 1.805 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927c1.333 .325 2.333 0 3 -.976"></path>', 5)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};