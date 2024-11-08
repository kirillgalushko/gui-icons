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
    o('<path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path><path d="M10 16h6"></path><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 8h3"></path><path d="M4 12h3"></path><path d="M4 16h3"></path>', 6)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
