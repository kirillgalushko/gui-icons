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
    r('<path d="M4 7h3m4 0h9"></path><path d="M4 17h13"></path><path d="M7 7v13"></path><path d="M17 4v9m0 4v3"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
