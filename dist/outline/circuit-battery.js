import { openBlock as e, createElementBlock as r, createStaticVNode as h } from "vue";
const o = {
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
function i(n, t) {
  return e(), r("svg", o, t[0] || (t[0] = [
    h('<path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M18 5v14"></path><path d="M14 9v6"></path><path d="M10 5v14"></path><path d="M6 9v6"></path>', 6)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
