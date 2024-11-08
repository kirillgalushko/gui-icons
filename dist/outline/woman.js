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
    h('<path d="M10 16v5"></path><path d="M14 16v5"></path><path d="M8 16h8l-2 -7h-4z"></path><path d="M5 11c1.667 -1.333 3.333 -2 5 -2"></path><path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2"></path><path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
