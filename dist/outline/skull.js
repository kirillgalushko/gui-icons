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
    h('<path d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z"></path><path d="M10 17v3"></path><path d="M14 17v3"></path><path d="M9 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
