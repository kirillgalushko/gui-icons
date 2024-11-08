import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
const h = {
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
function n(i, t) {
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M19 3l-5 5"></path><path d="M15 3h4v4"></path><path d="M11 16v6"></path><path d="M8 19h6"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
