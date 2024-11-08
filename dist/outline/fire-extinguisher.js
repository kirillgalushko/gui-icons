import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4z"></path><path d="M9 16h6"></path><path d="M12 7v-3"></path><path d="M16 5l-4 -1l4 -1"></path><path d="M12 4h-3a3 3 0 0 0 -3 3"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
