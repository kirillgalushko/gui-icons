import { openBlock as r, createElementBlock as c, createElementVNode as s } from "vue";
const i = (t, e) => {
  const l = t.__vccOpts || t;
  for (const [o, n] of e)
    l[o] = n;
  return l;
}, a = {}, m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function h(t, e) {
  return r(), c("svg", m, e[0] || (e[0] = [
    s("path", { d: "M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.051 6.844a1 1 0 0 0-1.152-.663l-.113.03-2.684.895-2.684-.895-.113-.03a1 1 0 0 0-.628 1.884l.109.044L11 12.22v.976l-1.832 2.75-.06.1a1 1 0 0 0 .237 1.21l.1.076.101.06a1 1 0 0 0 1.21-.237l.076-.1L12 15.303l1.168 1.752.07.093a1 1 0 0 0 1.653-1.102l-.059-.1L13 13.196v-.977l2.316-.771.109-.044a1 1 0 0 0 .524-1.221zM12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" }, null, -1)
  ]));
}
const d = /* @__PURE__ */ i(a, [["render", h]]);
export {
  d as I,
  i as _
};
