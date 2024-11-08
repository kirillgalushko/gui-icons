import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
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
  return h(), e("svg", p, t[0] || (t[0] = [
    a('<path d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698"></path><path d="M13 9h2v2m0 4h-6v-6"></path><path d="M3 10h2"></path><path d="M3 14h2"></path><path d="M10 3v2"></path><path d="M14 3v2"></path><path d="M21 10h-2"></path><path d="M21 14h-2"></path><path d="M14 21v-2"></path><path d="M10 21v-2"></path><path d="M3 3l18 18"></path>', 11)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
