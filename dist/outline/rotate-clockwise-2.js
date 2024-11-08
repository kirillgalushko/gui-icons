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
function n(a, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5"></path><path d="M5.63 7.16l0 .01"></path><path d="M4.06 11l0 .01"></path><path d="M4.63 15.1l0 .01"></path><path d="M7.16 18.37l0 .01"></path><path d="M11 19.94l0 .01"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
