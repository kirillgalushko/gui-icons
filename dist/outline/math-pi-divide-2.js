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
function r(a, t) {
  return e(), h("svg", i, t[0] || (t[0] = [
    o('<path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3"></path><path d="M5 12h14"></path><path d="M10 9v-6"></path><path d="M14 3v6"></path><path d="M15 3h-6"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
