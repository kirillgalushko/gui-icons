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
function r(p, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z"></path><path d="M17 7.875l3 -1.687"></path><path d="M17 7.875v3.375"></path><path d="M17 7.875l-3 -1.687"></path><path d="M17 7.875l3 1.688"></path><path d="M17 4.5v3.375"></path><path d="M17 7.875l-3 1.688"></path><path d="M3 3l18 18"></path>', 8)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
