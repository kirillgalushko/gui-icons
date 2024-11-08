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
function n(i, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5"></path><path d="M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6"></path><path d="M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5"></path><path d="M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
