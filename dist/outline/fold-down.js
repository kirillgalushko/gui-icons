import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
const n = {
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
function r(i, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M12 11v8l3 -3m-6 0l3 3"></path><path d="M9 7l1 0"></path><path d="M14 7l1 0"></path><path d="M19 7l1 0"></path><path d="M4 7l1 0"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
