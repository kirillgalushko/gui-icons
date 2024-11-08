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
function n(a, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path><path d="M12 2l0 2"></path><path d="M12 20l0 2"></path><path d="M20 12l2 0"></path><path d="M2 12l2 0"></path>', 6)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};