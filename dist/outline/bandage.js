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
function r(a, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M14 12l0 .01"></path><path d="M10 12l0 .01"></path><path d="M12 10l0 .01"></path><path d="M12 14l0 .01"></path><path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
