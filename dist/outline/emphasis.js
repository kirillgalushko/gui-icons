import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M16 5h-8v10h8m-1 -5h-7"></path><path d="M6 20l0 .01"></path><path d="M10 20l0 .01"></path><path d="M14 20l0 .01"></path><path d="M18 20l0 .01"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
