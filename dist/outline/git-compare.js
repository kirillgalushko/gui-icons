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
    a('<path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M11 6h5a2 2 0 0 1 2 2v8"></path><path d="M14 9l-3 -3l3 -3"></path><path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path><path d="M10 15l3 3l-3 3"></path>', 6)
  ]));
}
const p = { render: r };
export {
  p as default,
  r as render
};
