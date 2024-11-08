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
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M16 3h5v5"></path><path d="M8 3h-5v5"></path><path d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93"></path><path d="M6 6.01v-.01"></path><path d="M8 8.02v-.01"></path><path d="M10 10v.01"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
