import { openBlock as e, createElementBlock as o, createStaticVNode as n } from "vue";
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
function h(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    n('<path d="M4 6l7 0"></path><path d="M4 12l7 0"></path><path d="M4 18l9 0"></path><path d="M15 9l3 -3l3 3"></path><path d="M18 6l0 12"></path>', 5)
  ]));
}
const l = { render: h };
export {
  l as default,
  h as render
};
