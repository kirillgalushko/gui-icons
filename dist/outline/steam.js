import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
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
function p(r, t) {
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M4 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M20 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M5.5 5.5l3 3"></path><path d="M15.5 15.5l3 3"></path><path d="M18.5 5.5l-3 3"></path><path d="M8.5 15.5l-3 3"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
