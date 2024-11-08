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
function n(a, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M7 4l-2.75 2"></path><path d="M17 4l2.75 2"></path><path d="M10 13h4"></path><path d="M12 11v4"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
