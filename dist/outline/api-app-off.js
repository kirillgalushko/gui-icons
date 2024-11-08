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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"></path><path d="M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5"></path><path d="M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5"></path><path d="M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const p = { render: n };
export {
  p as default,
  n as render
};
