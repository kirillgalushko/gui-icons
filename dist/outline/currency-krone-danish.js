import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
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
function n(i, t) {
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M5 6v12"></path><path d="M5 12c3.5 0 6 -3 6 -6"></path><path d="M5 12c3.5 0 6 3 6 6"></path><path d="M15 10v8"></path><path d="M19 10a4 4 0 0 0 -4 4"></path><path d="M20 18.01v-.01"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
