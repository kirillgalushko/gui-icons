import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function r(a, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    h('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z"></path><path d="M15 10h-.01"></path><path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7"></path><path d="M7 10c.5 -1 2.5 -1 3 0"></path>', 5)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
