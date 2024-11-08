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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(a, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M3 6l5 0"></path><path d="M7 18l7 0"></path><path d="M4.5 6l5.5 7v5"></path><path d="M10 13l6 -5"></path><path d="M12.5 8l5 0"></path><path d="M20 11l0 4"></path><path d="M20 18l0 .01"></path>', 7)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
