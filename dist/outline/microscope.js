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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M5 21h14"></path><path d="M6 18h2"></path><path d="M7 18v3"></path><path d="M9 11l3 3l6 -6l-3 -3z"></path><path d="M10.5 12.5l-1.5 1.5"></path><path d="M17 3l3 3"></path><path d="M12 21a6 6 0 0 0 3.715 -10.712"></path>', 7)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};
