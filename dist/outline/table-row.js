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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path><path d="M9 3l-6 6"></path><path d="M14 3l-7 7"></path><path d="M19 3l-7 7"></path><path d="M21 6l-4 4"></path><path d="M3 10h18"></path><path d="M10 10v11"></path>', 7)
  ]));
}
const l = { render: r };
export {
  l as default,
  r as render
};
