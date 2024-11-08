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
    a('<path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 17a3 3 0 0 0 -3 -3h-3.4"></path><path d="M3 3h1a2 2 0 0 1 2 2v6"></path><path d="M6 8h11"></path><path d="M15 8v6"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
