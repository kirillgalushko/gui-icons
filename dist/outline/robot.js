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
    a('<path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M12 2v2"></path><path d="M9 12v9"></path><path d="M15 12v9"></path><path d="M5 16l4 -2"></path><path d="M15 14l4 2"></path><path d="M9 18h6"></path><path d="M10 8v.01"></path><path d="M14 8v.01"></path>', 9)
  ]));
}
const n = { render: p };
export {
  n as default,
  p as render
};
