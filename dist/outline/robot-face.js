import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z"></path><path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1"></path><path d="M9 7l-1 -4"></path><path d="M15 7l1 -4"></path><path d="M9 12v-1"></path><path d="M15 12v-1"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
