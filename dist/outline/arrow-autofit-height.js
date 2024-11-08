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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function i(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path><path d="M18 14v7"></path><path d="M18 3v7"></path><path d="M15 18l3 3l3 -3"></path><path d="M15 6l3 -3l3 3"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
