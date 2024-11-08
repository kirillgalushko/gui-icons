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
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2"></path><path d="M13 20h5a2 2 0 0 0 2 -2v-5"></path><path d="M15 22l-2 -2l2 -2"></path><path d="M18 15l2 -2l2 2"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};