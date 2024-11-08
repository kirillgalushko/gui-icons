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
    o('<path d="M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M7 3m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"></path><path d="M12 3v2"></path><path d="M10 15v.01"></path><path d="M10 18v.01"></path><path d="M14 18v.01"></path><path d="M14 15v.01"></path>', 7)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
