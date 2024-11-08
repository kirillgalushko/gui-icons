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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function p(r, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M15 13v4"></path><path d="M13 15h4"></path><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M22 22l-3 -3"></path><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"></path><path d="M3 11v-1"></path><path d="M3 6v-1a2 2 0 0 1 2 -2h1"></path><path d="M10 3h1"></path><path d="M15 3h1a2 2 0 0 1 2 2v1"></path>', 9)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
