import { openBlock as e, createElementBlock as o, createStaticVNode as a } from "vue";
const h = {
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
  return e(), o("svg", h, t[0] || (t[0] = [
    a('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M5.65 5.65l12.7 12.7"></path><path d="M5.65 18.35l12.7 -12.7"></path><path d="M12 3a9 9 0 0 0 9 9"></path><path d="M3 12a9 9 0 0 1 9 9"></path>', 5)
  ]));
}
const l = { render: r };
export {
  l as default,
  r as render
};
