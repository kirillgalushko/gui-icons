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
    a('<path d="M6 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1"></path><path d="M6 10h12"></path><path d="M6 16h12"></path><path d="M9 20v1"></path><path d="M15 20v1"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
