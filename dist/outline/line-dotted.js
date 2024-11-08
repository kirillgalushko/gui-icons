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
    h('<path d="M4 12v.01"></path><path d="M8 12v.01"></path><path d="M12 12v.01"></path><path d="M16 12v.01"></path><path d="M20 12v.01"></path>', 5)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
