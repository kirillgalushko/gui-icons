import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function r(d, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z"></path><path d="M11 9.5v5.5l5 3"></path><path d="M16 12.545l5 -3.03"></path><path d="M7 9h-5"></path><path d="M7 12h-3"></path><path d="M7 15h-1"></path>', 6)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
