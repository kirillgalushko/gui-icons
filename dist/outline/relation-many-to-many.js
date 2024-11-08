import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function h(a, t) {
  return e(), o("svg", n, t[0] || (t[0] = [
    r('<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M15 14v-4l3 4v-4"></path><path d="M6 14v-4l3 4v-4"></path><path d="M12 10.5l0 .01"></path><path d="M12 13.5l0 .01"></path>', 5)
  ]));
}
const l = { render: h };
export {
  l as default,
  h as render
};
