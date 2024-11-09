import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
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
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"></path><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"></path><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"></path><path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"></path><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"></path><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};