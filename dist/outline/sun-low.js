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
    o('<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M4 12h.01"></path><path d="M12 4v.01"></path><path d="M20 12h.01"></path><path d="M12 20v.01"></path><path d="M6.31 6.31l-.01 -.01"></path><path d="M17.71 6.31l-.01 -.01"></path><path d="M17.7 17.7l.01 .01"></path><path d="M6.3 17.7l.01 .01"></path>', 9)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
