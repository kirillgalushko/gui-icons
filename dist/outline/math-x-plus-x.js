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
    o('<path d="M2 9l6 6"></path><path d="M2 15l6 -6"></path><path d="M16 9l6 6"></path><path d="M16 15l6 -6"></path><path d="M10 12h4"></path><path d="M12 10v4"></path>', 6)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
