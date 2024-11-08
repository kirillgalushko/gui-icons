import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const i = {
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
  return e(), h("svg", i, t[0] || (t[0] = [
    o('<path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6z"></path><path d="M8 3l2 3"></path><path d="M16 3l-2 3"></path><path d="M9 13v-2"></path><path d="M15 11v2"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
