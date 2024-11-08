import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
function h(n, t) {
  return e(), o("svg", a, t[0] || (t[0] = [
    r('<path d="M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 10a3.5 3.5 0 0 0 -7 0"></path><path d="M14 10a3.5 3.5 0 0 1 -7 0"></path><path d="M14 17a3.5 3.5 0 0 0 0 -7"></path><path d="M14 3a3.5 3.5 0 0 0 0 7"></path><path d="M3 21l6 -6"></path>', 6)
  ]));
}
const p = { render: h };
export {
  p as default,
  h as render
};
