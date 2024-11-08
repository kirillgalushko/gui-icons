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
function l(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M12 3v6l3 -3m-6 0l3 3"></path><path d="M12 21v-6l3 3m-6 0l3 -3"></path><path d="M4 12l1 0"></path><path d="M9 12l1 0"></path><path d="M14 12l1 0"></path><path d="M19 12l1 0"></path>', 6)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
