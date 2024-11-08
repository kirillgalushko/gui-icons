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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M21 12a9 9 0 1 0 -9 9"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h8.4"></path><path d="M11.578 3a17 17 0 0 0 0 18"></path><path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9"></path><path d="M18 21v-7m3 3l-3 -3l-3 3"></path>', 6)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
