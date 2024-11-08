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
    a('<path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path><path d="M4 16v2a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v2"></path><path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path><path d="M7 12v-3h3"></path><path d="M14 9h3v3"></path><path d="M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172"></path><path d="M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172"></path>', 8)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
