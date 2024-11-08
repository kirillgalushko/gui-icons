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
    h('<path d="M15 4l4 0l0 4"></path><path d="M14.75 9.25l4.25 -5.25"></path><path d="M5 19l4 -4"></path><path d="M15 19l4 0l0 -4"></path><path d="M5 5l14 14"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
