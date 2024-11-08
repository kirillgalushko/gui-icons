import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function n(r, t) {
  return e(), o("svg", a, t[0] || (t[0] = [
    h('<path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M7 18h10"></path><path d="M18 16l-5 -8"></path><path d="M11 8l-5 8"></path>', 6)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};
