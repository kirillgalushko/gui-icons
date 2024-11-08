import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(p, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M4 10m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z"></path><path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4"></path><path d="M15 7h.01"></path><path d="M18 9h.01"></path><path d="M18 5h.01"></path><path d="M21 3h.01"></path><path d="M21 7h.01"></path><path d="M21 11h.01"></path><path d="M10 7h1"></path>', 9)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
