import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
const h = {
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
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M4 13v.01"></path><path d="M4 9v.01"></path><path d="M4 5v.01"></path><path d="M17 20l3 -3l-3 -3"></path><path d="M4 17h16"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
