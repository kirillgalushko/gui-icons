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
function r(i, t) {
  return e(), h("svg", n, t[0] || (t[0] = [
    o('<path d="M21 8h-4v8h4"></path><path d="M17 12h2.5"></path><path d="M4 8v8h4"></path><path d="M10 8h4"></path><path d="M12 8v8"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
