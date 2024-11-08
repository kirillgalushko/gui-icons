import { openBlock as a, createElementBlock as e, createStaticVNode as h } from "vue";
const o = {
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
function r(p, t) {
  return a(), e("svg", o, t[0] || (t[0] = [
    h('<path d="M4 8l8 -5l8 5v8l-8 5l-8 -5z"></path><path d="M12 4l7.5 12h-15z"></path><path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>', 8)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
