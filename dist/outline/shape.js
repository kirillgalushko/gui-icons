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
function p(r, t) {
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 7l0 10"></path><path d="M7 5l10 0"></path><path d="M7 19l10 0"></path><path d="M19 7l0 10"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
