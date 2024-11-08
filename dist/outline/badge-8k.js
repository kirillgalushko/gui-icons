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
    h('<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M14 9v6"></path><path d="M17 9l-2 3l2 3"></path><path d="M15 12h-1"></path><path d="M8.5 12h-.5a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
