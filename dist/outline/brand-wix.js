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
    h('<path d="M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6"></path><path d="M13 11.5v3.5"></path><path d="M16 9l5 6"></path><path d="M21 9l-5 6"></path><path d="M13 9h.01"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
