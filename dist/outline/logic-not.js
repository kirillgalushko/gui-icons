import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const r = {
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
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M22 12h-3"></path><path d="M2 9h3"></path><path d="M2 15h3"></path><path d="M5 5l10 7l-10 7z"></path><path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};