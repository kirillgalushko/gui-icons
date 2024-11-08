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
    h('<path d="M8 4h.01"></path><path d="M6.453 6.474l-3.453 5.526l5 8"></path><path d="M16 4l5 8l-1.917 3.067"></path><path d="M17.535 17.544l-1.535 2.456"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
