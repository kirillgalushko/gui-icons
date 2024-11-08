import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M18 12h4"></path><path d="M20 10v4"></path><path d="M11 12h4"></path><path d="M13 10v4"></path><path d="M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
