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
function n(a, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M8.848 14.667l-3.348 2.833"></path><path d="M12 3v5m4 4h5"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M14.219 15.328l2.781 4.172"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
