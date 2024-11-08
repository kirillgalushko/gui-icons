import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const a = {
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
function r(n, t) {
  return e(), o("svg", a, t[0] || (t[0] = [
    h('<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"></path><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"></path><path d="M3 6v13"></path><path d="M12 6v2m0 4v7"></path><path d="M21 6v11"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
