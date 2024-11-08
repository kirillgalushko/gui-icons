import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M11 16h10"></path><path d="M11 16l4 4"></path><path d="M11 16l4 -4"></path><path d="M13 8h-10"></path><path d="M13 8l-4 4"></path><path d="M13 8l-4 -4"></path>', 6)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
