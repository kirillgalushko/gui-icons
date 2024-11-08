import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M12 3v2"></path><path d="M12 19v2"></path><path d="M12 8v8"></path><path d="M8 17v2"></path><path d="M4 11v2"></path><path d="M20 11v2"></path><path d="M8 5v8"></path><path d="M16 7v-2"></path><path d="M16 19v-8"></path>', 9)
  ]));
}
const n = { render: r };
export {
  n as default,
  r as render
};
