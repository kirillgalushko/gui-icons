import { openBlock as e, createElementBlock as h, createStaticVNode as n } from "vue";
const o = {
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
function r(a, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    n('<path d="M20 4v8"></path><path d="M16 4.5v7"></path><path d="M12 5v16"></path><path d="M8 5.5v5"></path><path d="M4 6v4"></path><path d="M20 8h-16"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
