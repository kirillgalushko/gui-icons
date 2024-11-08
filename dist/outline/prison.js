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
function n(p, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M18 4v16"></path><path d="M14 4v16"></path><path d="M6 4v5"></path><path d="M6 15v5"></path><path d="M10 4v5"></path><path d="M11 9h-6v6h6z"></path><path d="M10 15v5"></path><path d="M8 12h-.01"></path>', 8)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
