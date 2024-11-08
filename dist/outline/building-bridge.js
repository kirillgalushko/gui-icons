import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
const i = {
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
function n(h, t) {
  return e(), o("svg", i, t[0] || (t[0] = [
    r('<path d="M6 5l0 14"></path><path d="M18 5l0 14"></path><path d="M2 15l20 0"></path><path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2"></path><path d="M12 10l0 5"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
