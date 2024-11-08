import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
const o = {
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
function r(p, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M8 18h-.011"></path><path d="M12 18h-.011"></path><path d="M16 18h-.011"></path><path d="M4 3h16"></path><path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17"></path><path d="M14 7h-4"></path><path d="M9 15h1"></path><path d="M14 15h1"></path><path d="M12 11v-4"></path>', 9)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
