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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(p, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 16v.01"></path><path d="M8 12v.01"></path><path d="M8 8v.01"></path><path d="M16 16v.01"></path><path d="M16 12v.01"></path><path d="M16 8v.01"></path><path d="M12 8v.01"></path><path d="M12 16v.01"></path>', 9)
  ]));
}
const n = { render: r };
export {
  n as default,
  r as render
};