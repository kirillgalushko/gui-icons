import { openBlock as e, createElementBlock as h, createStaticVNode as a } from "vue";
const o = {
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
function p(r, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M12 10v4"></path><path d="M10 13l4 -2"></path><path d="M10 11l4 2"></path><path d="M5 10v4"></path><path d="M3 13l4 -2"></path><path d="M3 11l4 2"></path><path d="M19 10v4"></path><path d="M17 13l4 -2"></path><path d="M17 11l4 2"></path>', 9)
  ]));
}
const n = { render: p };
export {
  n as default,
  p as render
};
