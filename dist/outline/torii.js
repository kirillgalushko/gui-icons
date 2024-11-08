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
function i(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M4 4c5.333 1.333 10.667 1.333 16 0"></path><path d="M4 8h16"></path><path d="M12 5v3"></path><path d="M18 4.5v15.5"></path><path d="M6 4.5v15.5"></path>', 5)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};
