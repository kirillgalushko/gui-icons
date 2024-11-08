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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(a, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M20 12c0 8 0 8 -8 8s-8 0 -8 -8s0 -8 8 -8s8 0 8 8z"></path><path d="M9.5 13c1.333 .667 3.667 .667 5 0"></path><path d="M9.5 17l2.5 -3l2.5 3"></path><path d="M12 13.5v.5"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
