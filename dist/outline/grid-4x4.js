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
    o('<path d="M3 6h18"></path><path d="M3 12h18"></path><path d="M3 18h18"></path><path d="M6 3v18"></path><path d="M12 3v18"></path><path d="M18 3v18"></path>', 6)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
