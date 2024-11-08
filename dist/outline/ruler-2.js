import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
const l = {
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
function h(n, t) {
  return e(), r("svg", l, t[0] || (t[0] = [
    o('<path d="M17 3l4 4l-14 14l-4 -4z"></path><path d="M16 7l-1.5 -1.5"></path><path d="M13 10l-1.5 -1.5"></path><path d="M10 13l-1.5 -1.5"></path><path d="M7 16l-1.5 -1.5"></path>', 5)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
