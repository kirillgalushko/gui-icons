import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const n = {
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
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M7 12h10"></path><path d="M7 5v14"></path><path d="M17 5v14"></path><path d="M15 19h4"></path><path d="M15 5h4"></path><path d="M5 19h4"></path><path d="M5 5h4"></path>', 7)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
