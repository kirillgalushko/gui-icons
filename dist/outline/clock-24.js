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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0"></path><path d="M12 7v5"></path><path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"></path><path d="M18 15v2a1 1 0 0 0 1 1h1"></path><path d="M21 15v6"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
