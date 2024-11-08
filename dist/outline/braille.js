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
    a('<path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z"></path><path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z"></path><path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z"></path><path d="M16 12h.01"></path><path d="M8 12h.01"></path><path d="M16 19h.01"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
