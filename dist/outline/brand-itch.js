import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const c = {
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
function l(r, t) {
  return n(), o("svg", c, t[0] || (t[0] = [
    e("path", { d: "M2 7v1c0 1.087 1.078 2 2 2c1.107 0 2 -.91 2 -2c0 1.09 .893 2 2 2s2 -.91 2 -2c0 1.09 .893 2 2 2s2 -.91 2 -2c0 1.09 .893 2 2 2s2 -.91 2 -2c0 1.09 .893 2 2 2c.922 0 2 -.913 2 -2v-1c-.009 -.275 -.538 -.964 -1.588 -2.068a3 3 0 0 0 -2.174 -.932h-12.476a3 3 0 0 0 -2.174 .932c-1.05 1.104 -1.58 1.793 -1.588 2.068z" }, null, -1),
    e("path", { d: "M4 10c-.117 6.28 .154 9.765 .814 10.456c1.534 .367 4.355 .535 7.186 .536c2.83 -.001 5.652 -.169 7.186 -.536c.99 -1.037 .898 -9.559 .814 -10.456" }, null, -1),
    e("path", { d: "M10 16l2 -2l2 2" }, null, -1),
    e("path", { d: "M12 14v4" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};