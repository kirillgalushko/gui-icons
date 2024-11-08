import { openBlock as e, createElementBlock as l, createStaticVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(h, t) {
  return e(), l("svg", r, t[0] || (t[0] = [
    o('<path d="M3 12l3 3l3 -3l-3 -3z"></path><path d="M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5"></path><path d="M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5"></path><path d="M9 18l3 3l3 -3l-3 -3z"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
