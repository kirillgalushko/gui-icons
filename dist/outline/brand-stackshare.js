import { openBlock as e, createElementBlock as h, createStaticVNode as a } from "vue";
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
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 12h3l3.5 6h3.5"></path><path d="M17 6h-3.5l-3.5 6"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};