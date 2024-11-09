import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
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
function r(n, t) {
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path><path d="M5 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M8 22l4 -10l4 10"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};