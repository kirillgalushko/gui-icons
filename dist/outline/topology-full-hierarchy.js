import { openBlock as a, createElementBlock as h, createStaticVNode as e } from "vue";
const p = {
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
function o(d, t) {
  return a(), h("svg", p, t[0] || (t[0] = [
    e('<path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M6 8v8"></path><path d="M18 16v-8"></path><path d="M8 6h8"></path><path d="M16 18h-8"></path><path d="M7.5 7.5l3 3"></path><path d="M13.5 13.5l3 3"></path><path d="M16.5 7.5l-3 3"></path><path d="M10.5 13.5l-3 3"></path>', 13)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
