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
    a('<path d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path><path d="M3 8l1 0"></path><path d="M3 16l1 0"></path><path d="M8 3l0 1"></path><path d="M16 3l0 1"></path><path d="M20 8l1 0"></path><path d="M20 16l1 0"></path><path d="M8 20l0 1"></path><path d="M16 20l0 1"></path>', 9)
  ]));
}
const n = { render: p };
export {
  n as default,
  p as render
};
