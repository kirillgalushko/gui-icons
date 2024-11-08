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
    a('<path d="M6 21h6"></path><path d="M9 21v-12"></path><path d="M9 5v-2l-1 1"></path><path d="M6 6l-3 3h6"></path><path d="M13 9h8"></path><path d="M9 3l10 6"></path><path d="M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2"></path><path d="M3 3l18 18"></path>', 8)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
