import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
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
function a(n, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 7a5 5 0 1 0 5 5"></path><path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path><path d="M15 6v3h3l3 -3h-3v-3z"></path><path d="M15 9l-3 3"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
