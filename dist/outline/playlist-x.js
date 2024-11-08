import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M19 8h-14"></path><path d="M5 12h7"></path><path d="M12 16h-7"></path><path d="M16 14l4 4"></path><path d="M20 14l-4 4"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
