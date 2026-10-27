import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { scale as Se, fade as ze, fly as Be } from "svelte/transition";
import "svelte/internal/flags/legacy";
import { onMount as ve } from "svelte";
var Ie = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "variant",
  "size",
  "disabled",
  "loading",
  "fullWidth",
  "type",
  "href",
  "onclick",
  "children"
]), Ne = e.from_html("<a><!></a>"), Re = e.from_html('<span class="spinner svelte-1klcfz0" aria-hidden="true"></span>'), De = e.from_html("<button><!> <!></button>");
function fe(a, t) {
  let s = e.prop(
    t,
    "variant",
    3,
    "primary"
    // 'primary' | 'secondary' | 'ghost' | 'danger' | 'orange'
  ), l = e.prop(
    t,
    "size",
    3,
    "md"
    // 'sm' | 'md' | 'lg'
  ), i = e.prop(t, "disabled", 3, !1), r = e.prop(t, "loading", 3, !1), o = e.prop(t, "fullWidth", 3, !1), d = e.prop(t, "type", 3, "button"), v = e.prop(t, "href", 3, void 0), p = e.rest_props(t, Ie);
  var h = e.comment(), f = e.first_child(h);
  {
    var _ = (w) => {
      var y = Ne();
      e.attribute_effect(
        y,
        () => ({
          class: `swal-btn ${s() ?? ""} ${l() ?? ""}`,
          href: v(),
          onclick: t.onclick,
          ...p,
          [e.CLASS]: { full: o() }
        }),
        void 0,
        void 0,
        void 0,
        "svelte-1klcfz0"
      );
      var g = e.child(y);
      e.snippet(g, () => t.children ?? e.noop), e.reset(y), e.append(w, y);
    }, z = (w) => {
      var y = De();
      e.attribute_effect(
        y,
        () => ({
          class: `swal-btn ${s() ?? ""} ${l() ?? ""}`,
          type: d(),
          disabled: i() || r(),
          onclick: t.onclick,
          ...p,
          [e.CLASS]: { full: o(), busy: i() || r() }
        }),
        void 0,
        void 0,
        void 0,
        "svelte-1klcfz0"
      );
      var g = e.child(y);
      {
        var k = (n) => {
          var u = Re();
          e.append(n, u);
        };
        e.if(g, (n) => {
          r() && n(k);
        });
      }
      var M = e.sibling(g, 2);
      e.snippet(M, () => t.children ?? e.noop), e.reset(y), e.append(w, y);
    };
    e.if(f, (w) => {
      v() && !i() && !r() ? w(_) : w(z, -1);
    });
  }
  e.append(a, h);
}
var Pe = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "variant",
  "padding",
  "hoverable",
  "onclick",
  "children"
]), He = e.from_html("<button><!></button>"), Ve = e.from_html("<div><!></div>");
function be(a, t) {
  let s = e.prop(
    t,
    "variant",
    3,
    "default"
    // 'default' | 'surface' | 'elevated' | 'glass'
  ), l = e.prop(
    t,
    "padding",
    3,
    "md"
    // 'none' | 'sm' | 'md' | 'lg'
  ), i = e.prop(t, "hoverable", 3, !1), r = e.rest_props(t, Pe);
  var o = e.comment(), d = e.first_child(o);
  {
    var v = (h) => {
      var f = He();
      e.attribute_effect(
        f,
        () => ({
          class: `swal-card ${s() ?? ""} pad-${l() ?? ""} hoverable as-button`,
          onclick: t.onclick,
          ...r
        }),
        void 0,
        void 0,
        void 0,
        "svelte-1s7zazm"
      );
      var _ = e.child(f);
      e.snippet(_, () => t.children ?? e.noop), e.reset(f), e.append(h, f);
    }, p = (h) => {
      var f = Ve();
      e.attribute_effect(
        f,
        () => ({
          class: `swal-card ${s() ?? ""} pad-${l() ?? ""}`,
          ...r,
          [e.CLASS]: { hoverable: i() }
        }),
        void 0,
        void 0,
        void 0,
        "svelte-1s7zazm"
      );
      var _ = e.child(f);
      e.snippet(_, () => t.children ?? e.noop), e.reset(f), e.append(h, f);
    };
    e.if(d, (h) => {
      t.onclick ? h(v) : h(p, -1);
    });
  }
  e.append(a, o);
}
var Ue = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "variant",
  "size",
  "pulse",
  "dot",
  "children"
]), Fe = e.from_html('<span class="dot svelte-1fmrh5r" aria-hidden="true"></span>'), Ke = e.from_html("<span><!> <!></span>");
function Is(a, t) {
  let s = e.prop(
    t,
    "variant",
    3,
    "neutral"
    // 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'orange'
  ), l = e.prop(
    t,
    "size",
    3,
    "sm"
    // 'sm' | 'md'
  ), i = e.prop(t, "pulse", 3, !1), r = e.prop(t, "dot", 19, () => s() !== "neutral"), o = e.rest_props(t, Ue);
  var d = Ke();
  e.attribute_effect(
    d,
    () => ({
      class: `swal-badge ${s() ?? ""} ${l() ?? ""}`,
      ...o,
      [e.CLASS]: { pulse: i() }
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1fmrh5r"
  );
  var v = e.child(d);
  {
    var p = (f) => {
      var _ = Fe();
      e.append(f, _);
    };
    e.if(v, (f) => {
      r() && f(p);
    });
  }
  var h = e.sibling(v, 2);
  e.snippet(h, () => t.children ?? e.noop), e.reset(d), e.append(a, d);
}
var We = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "value",
  "placeholder",
  "type",
  "label",
  "error",
  "id"
]), Ge = e.from_html('<label class="swal-label svelte-j2lm9g"> </label>'), Je = e.from_html('<p class="swal-error svelte-j2lm9g"> </p>'), Ye = e.from_html("<!> <input/> <!>", 1);
function Ns(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "value", 15, ""), l = e.prop(t, "placeholder", 3, ""), i = e.prop(t, "type", 3, "text"), r = e.prop(t, "label", 3, ""), o = e.prop(t, "error", 3, ""), d = e.prop(t, "id", 19, () => `swal-input-${Math.random().toString(36).substring(2, 9)}`), v = e.rest_props(t, We);
  var p = Ye(), h = e.first_child(p);
  {
    var f = (y) => {
      var g = Ge(), k = e.only_child(g, !0);
      e.template_effect(() => {
        e.set_attribute(g, "for", d()), e.set_text(k, r());
      }), e.append(y, g);
    };
    e.if(h, (y) => {
      r() && y(f);
    });
  }
  var _ = e.sibling(h, 2);
  e.attribute_effect(
    _,
    () => ({
      id: d(),
      type: i(),
      placeholder: l(),
      class: "swal-input",
      "aria-invalid": !!o(),
      "aria-describedby": o() ? `${d()}-error` : void 0,
      ...v,
      [e.CLASS]: { "has-error": !!o() }
    }),
    void 0,
    void 0,
    void 0,
    "svelte-j2lm9g",
    !0
  );
  var z = e.sibling(_, 2);
  {
    var w = (y) => {
      var g = Je(), k = e.only_child(g, !0);
      e.template_effect(() => {
        e.set_attribute(g, "id", `${d() ?? ""}-error`), e.set_text(k, o());
      }), e.append(y, g);
    };
    e.if(z, (y) => {
      o() && y(w);
    });
  }
  e.bind_value(_, s), e.append(a, p), e.pop();
}
var Qe = e.from_html('<th scope="col" class="svelte-qusz4c"><!></th>'), Ze = e.from_html('<td class="svelte-qusz4c"><!></td>'), Xe = e.from_html('<tr class="svelte-qusz4c"></tr>'), $e = e.from_html('<div class="swal-table-wrap swal-scrollbar svelte-qusz4c"><table><thead class="svelte-qusz4c"><tr class="svelte-qusz4c"></tr></thead><tbody class="svelte-qusz4c"></tbody></table></div>');
function Rs(a, t) {
  let s = e.prop(t, "columns", 19, () => []), l = e.prop(t, "rows", 19, () => []), i = e.prop(
    t,
    "variant",
    3,
    "default"
    // 'default' | 'compact'
  );
  function r(f) {
    const _ = [];
    return f.width && _.push(`width: ${f.width}`), f.align && _.push(`text-align: ${f.align}`), _.length ? _.join(";") : void 0;
  }
  var o = $e(), d = e.child(o), v = e.child(d), p = e.child(v);
  e.each(p, 21, s, e.index, (f, _) => {
    var z = Qe(), w = e.child(z);
    {
      var y = (k) => {
        var M = e.comment(), n = e.first_child(M);
        e.snippet(n, () => t.header, () => e.get(_)), e.append(k, M);
      }, g = (k) => {
        var M = e.text();
        e.template_effect(() => e.set_text(M, e.get(_).label)), e.append(k, M);
      };
      e.if(w, (k) => {
        t.header ? k(y) : k(g, -1);
      });
    }
    e.reset(z), e.template_effect((k) => e.set_style(z, k), [() => r(e.get(_))]), e.append(f, z);
  }), e.reset(p), e.reset(v);
  var h = e.sibling(v);
  e.each(h, 21, l, e.index, (f, _) => {
    var z = Xe();
    e.each(z, 21, s, e.index, (w, y) => {
      var g = Ze(), k = e.child(g);
      {
        var M = (u) => {
          var x = e.comment(), m = e.first_child(x);
          e.snippet(m, () => t.cell, () => e.get(_), () => e.get(y)), e.append(u, x);
        }, n = (u) => {
          var x = e.text();
          e.template_effect(() => e.set_text(x, e.get(_)[e.get(y).key])), e.append(u, x);
        };
        e.if(k, (u) => {
          t.cell ? u(M) : u(n, -1);
        });
      }
      e.reset(g), e.template_effect(() => e.set_style(g, e.get(y).align ? `text-align: ${e.get(y).align}` : void 0)), e.append(w, g);
    }), e.reset(z), e.append(f, z);
  }), e.reset(h), e.reset(d), e.reset(o), e.template_effect(() => e.set_class(d, 1, e.clsx(i()), "svelte-qusz4c")), e.append(a, o);
}
var et = e.from_html('<span class="indicator svelte-1ubhdxk" aria-hidden="true"></span>'), tt = e.from_html('<button role="tab"> <!></button>'), at = e.from_html('<div class="swal-tabs svelte-1ubhdxk" role="tablist"></div> <!>', 1);
function Ds(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "tabs", 19, () => []), l = e.prop(t, "active", 15, "");
  var i = at(), r = e.first_child(i);
  e.each(r, 21, s, e.index, (d, v) => {
    var p = tt();
    let h;
    var f = e.child(p), _ = e.sibling(f);
    {
      var z = (w) => {
        var y = et();
        e.append(w, y);
      };
      e.if(_, (w) => {
        e.get(v).id === l() && w(z);
      });
    }
    e.reset(p), e.template_effect(() => {
      e.set_attribute(p, "aria-selected", e.get(v).id === l()), h = e.set_class(p, 1, "tab svelte-1ubhdxk", null, h, { active: e.get(v).id === l() }), e.set_text(f, `${e.get(v).label ?? ""} `);
    }), e.delegated("click", p, () => l(e.get(v).id)), e.append(d, p);
  }), e.reset(r);
  var o = e.sibling(r, 2);
  e.snippet(o, () => t.children ?? e.noop), e.template_effect(() => e.set_attribute(r, "aria-label", t.label)), e.append(a, i), e.pop();
}
e.delegate(["click"]);
var st = e.from_html('<div class="swal-skeleton circle svelte-tl058d" aria-hidden="true"></div>'), rt = e.from_html('<div class="swal-skeleton-card svelte-tl058d" aria-hidden="true"><div class="swal-skeleton bar w-3-4 svelte-tl058d"></div> <div class="swal-skeleton bar tall svelte-tl058d"></div> <div class="swal-skeleton bar w-1-2 svelte-tl058d"></div></div>'), lt = e.from_html('<div class="swal-skeleton svelte-tl058d" aria-hidden="true"></div>');
function Ps(a, t) {
  let s = e.prop(t, "width", 3, "100%"), l = e.prop(t, "height", 3, "20px"), i = e.prop(
    t,
    "variant",
    3,
    "text"
    // 'text' | 'card' | 'circle'
  );
  var r = e.comment(), o = e.first_child(r);
  {
    var d = (h) => {
      var f = st();
      e.template_effect(() => e.set_style(f, `width: ${s() ?? ""}; height: ${l() ?? ""};`)), e.append(h, f);
    }, v = (h) => {
      var f = rt();
      e.template_effect(() => e.set_style(f, `width: ${s() ?? ""};`)), e.append(h, f);
    }, p = (h) => {
      var f = lt();
      e.template_effect(() => e.set_style(f, `width: ${s() ?? ""}; height: ${l() ?? ""};`)), e.append(h, f);
    };
    e.if(o, (h) => {
      i() === "circle" ? h(d) : i() === "card" ? h(v, 1) : h(p, -1);
    });
  }
  e.append(a, r);
}
var it = e.from_html('<span class="header-icon svelte-1bxxaoh"><!></span>'), nt = e.from_html('<div class="header svelte-1bxxaoh"><div class="header-title svelte-1bxxaoh"><!> <h3 class="svelte-1bxxaoh"> </h3></div> <button class="close-btn svelte-1bxxaoh" aria-label="Cerrar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div>'), ot = e.from_html('<div class="swal-modal-root svelte-1bxxaoh"><button class="backdrop svelte-1bxxaoh" aria-label="Cerrar modal" tabindex="-1"></button> <div tabindex="-1" role="dialog" aria-modal="true"><!> <div class="body swal-scrollbar svelte-1bxxaoh"><!></div> <div class="edge top svelte-1bxxaoh" aria-hidden="true"></div> <div class="edge bottom svelte-1bxxaoh" aria-hidden="true"></div></div></div>');
function Hs(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "open", 15, !1), l = e.prop(t, "title", 3, ""), i = e.prop(
    t,
    "size",
    3,
    "md"
    // 'sm' | 'md' | 'lg'
  );
  function r() {
    var f;
    s(!1), (f = t.onclose) == null || f.call(t);
  }
  function o(f) {
    f.key === "Escape" && s() && r();
  }
  let d = e.state(void 0);
  e.user_effect(() => {
    if (s()) {
      const f = setTimeout(() => {
        var _;
        return (_ = e.get(d)) == null ? void 0 : _.focus({ preventScroll: !0 });
      }, 0);
      return () => clearTimeout(f);
    }
  }), e.user_effect(() => {
    if (s()) {
      const f = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = f;
      };
    }
  });
  var v = e.comment();
  e.event("keydown", e.window, o);
  var p = e.first_child(v);
  {
    var h = (f) => {
      var _ = ot(), z = e.child(_), w = e.sibling(z, 2), y = e.child(w);
      {
        var g = (n) => {
          var u = nt(), x = e.child(u), m = e.child(x);
          {
            var S = (O) => {
              var E = it(), c = e.child(E);
              e.snippet(c, () => t.icon), e.reset(E), e.append(O, E);
            };
            e.if(m, (O) => {
              t.icon && O(S);
            });
          }
          var I = e.sibling(m, 2), j = e.only_child(I, !0);
          e.reset(x);
          var q = e.sibling(x, 2);
          e.reset(u), e.template_effect(() => e.set_text(j, l())), e.delegated("click", q, r), e.append(n, u);
        };
        e.if(y, (n) => {
          l() && n(g);
        });
      }
      var k = e.sibling(y, 2), M = e.child(k);
      e.snippet(M, () => t.children ?? e.noop), e.reset(k), e.next(4), e.reset(w), e.bind_this(w, (n) => e.set(d, n), () => e.get(d)), e.reset(_), e.template_effect(() => {
        e.set_class(w, 1, `modal ${i() ?? ""}`, "svelte-1bxxaoh"), e.set_attribute(w, "aria-label", l() || void 0);
      }), e.delegated("click", z, r), e.transition(3, w, () => Se, () => ({ start: 0.95, duration: 200 })), e.transition(3, _, () => ze, () => ({ duration: 200 })), e.append(f, _);
    };
    e.if(p, (f) => {
      s() && f(h);
    });
  }
  e.append(a, v), e.pop();
}
e.delegate(["click"]);
var dt = e.from_html('<span aria-hidden="true"></span>'), ct = e.from_html('<span class="swal-status-badge svelte-1hqr9xd" role="status"><!> <span aria-hidden="true"></span></span>');
function Vs(a, t) {
  let s = e.prop(
    t,
    "status",
    3,
    "offline"
    // 'healthy' | 'warning' | 'error' | 'offline'
  ), l = e.prop(t, "pulse", 3, !0);
  var i = ct(), r = e.child(i);
  {
    var o = (v) => {
      var p = dt();
      e.template_effect(() => e.set_class(p, 1, `ring ${s() ?? ""}`, "svelte-1hqr9xd")), e.append(v, p);
    };
    e.if(r, (v) => {
      l() && s() !== "offline" && v(o);
    });
  }
  var d = e.sibling(r, 2);
  e.reset(i), e.template_effect(() => {
    e.set_attribute(i, "aria-label", s()), e.set_class(d, 1, `dot ${s() ?? ""}`, "svelte-1hqr9xd");
  }), e.append(a, i);
}
var vt = e.from_html('<button class="swal-retry svelte-dbzabj" type="button">↻ Retry</button>'), ut = e.from_html('<svg class="error-icon svelte-dbzabj" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" class="svelte-dbzabj"></circle><path d="m15 9-6 6" class="svelte-dbzabj"></path><path d="m9 9 6 6" class="svelte-dbzabj"></path></svg> <p class="error-text svelte-dbzabj"> </p> <!>', 1), ft = e.from_html('<svg class="spinner svelte-dbzabj" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56" class="svelte-dbzabj"></path></svg> <p class="svelte-dbzabj"> </p>', 1), pt = e.from_html('<div class="swal-loading svelte-dbzabj" role="status" aria-live="polite"><!></div>');
function Us(a, t) {
  let s = e.prop(t, "message", 3, "Loading..."), l = e.prop(t, "height", 3, "16rem"), i = e.prop(t, "error", 3, null), r = e.prop(t, "onretry", 3, null);
  var o = pt(), d = e.child(o);
  {
    var v = (h) => {
      var f = ut(), _ = e.sibling(e.first_child(f), 2), z = e.only_child(_, !0), w = e.sibling(_, 2);
      {
        var y = (g) => {
          var k = vt();
          e.delegated("click", k, function(...M) {
            var n;
            (n = r()) == null || n.apply(this, M);
          }), e.append(g, k);
        };
        e.if(w, (g) => {
          r() && g(y);
        });
      }
      e.template_effect(() => e.set_text(z, i())), e.append(h, f);
    }, p = (h) => {
      var f = ft(), _ = e.sibling(e.first_child(f), 2), z = e.only_child(_, !0);
      e.template_effect(() => e.set_text(z, s())), e.append(h, f);
    };
    e.if(d, (h) => {
      i() ? h(v) : h(p, -1);
    });
  }
  e.reset(o), e.template_effect(() => e.set_style(o, `min-height: ${l() ?? ""};`)), e.append(a, o);
}
e.delegate(["click"]);
var ht = e.from_html('<div class="line svelte-k4so18"><span class="ts svelte-k4so18"> </span> <span> </span> <span class="service svelte-k4so18"> </span> <span class="message svelte-k4so18"> </span></div>'), _t = e.from_html('<div class="swal-terminal svelte-k4so18"><div class="header svelte-k4so18"><div class="dots svelte-k4so18"><span class="dot red svelte-k4so18"></span> <span class="dot yellow svelte-k4so18"></span> <span class="dot green svelte-k4so18"></span> <span class="title svelte-k4so18"> </span></div> <div class="meta svelte-k4so18">BASH - 80x24</div></div> <div class="body swal-scrollbar svelte-k4so18"><!> <div class="cursor-line svelte-k4so18"><span class="prompt svelte-k4so18"> </span> <span class="cursor svelte-k4so18"></span></div></div></div>');
function Fs(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "logs", 19, () => []), l = e.prop(t, "title", 3, "STD_OUT >> SWAL_RUNTIME"), i = e.prop(t, "prompt", 3, "root@swal:~$"), r = e.prop(t, "height", 3, "24rem"), o = e.prop(t, "autoScroll", 3, !0), d = e.prop(
    t,
    "maxHeight",
    3,
    null
    // string | null — p. ej. '60vh'; anula `height` y deja crecer el body hasta ese tope
  ), v = e.state(null);
  e.user_effect(() => {
    var u;
    o() && (s().length, (u = e.get(v)) == null || u.scrollTo({ top: e.get(v).scrollHeight, behavior: "smooth" }));
  });
  function p(u) {
    try {
      return u.split("T")[1].split(".")[0];
    } catch {
      return u;
    }
  }
  var h = _t(), f = e.child(h), _ = e.child(f), z = e.sibling(e.child(_), 6), w = e.only_child(z, !0);
  e.reset(_), e.next(2), e.reset(f);
  var y = e.sibling(f, 2), g = e.child(y);
  e.each(g, 17, s, (u) => u.id, (u, x) => {
    var m = ht(), S = e.child(m), I = e.only_child(S), j = e.sibling(S, 2), q = e.only_child(j, !0), O = e.sibling(j, 2), E = e.only_child(O), c = e.sibling(O, 2), b = e.only_child(c, !0);
    e.reset(m), e.template_effect(
      (T) => {
        e.set_text(I, `[${T ?? ""}]`), e.set_class(j, 1, `level ${e.get(x).level ?? ""}`, "svelte-k4so18"), e.set_text(q, e.get(x).level), e.set_text(E, `[${e.get(x).service ?? ""}]`), e.set_text(b, e.get(x).message);
      },
      [() => p(e.get(x).timestamp)]
    ), e.append(u, m);
  });
  var k = e.sibling(g, 2), M = e.child(k), n = e.only_child(M, !0);
  e.next(2), e.reset(k), e.reset(y), e.bind_this(y, (u) => e.set(v, u), () => e.get(v)), e.reset(h), e.template_effect(() => {
    e.set_text(w, l()), e.set_style(y, `height: ${(d() ? "auto" : r()) ?? ""}; max-height: ${(d() || "none") ?? ""};`), e.set_text(n, i());
  }), e.append(a, h), e.pop();
}
var gt = e.from_html('<span class="item-hint svelte-1bm0yy4"> </span>'), mt = e.from_svg('<svg class="arrow svelte-1bm0yy4" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>'), bt = e.from_html('<button role="option"><span class="item-label svelte-1bm0yy4"> </span> <!> <!></button>'), yt = e.from_html('<div class="group-label svelte-1bm0yy4">Results</div> <!>', 1), xt = e.from_html('<div class="empty svelte-1bm0yy4"> </div>'), wt = e.from_html('<div class="swal-palette-root svelte-1bm0yy4"><button class="backdrop svelte-1bm0yy4" aria-label="Cerrar" tabindex="-1"></button> <div class="palette svelte-1bm0yy4" role="dialog" aria-modal="true" aria-label="Paleta de comandos"><div class="input-row svelte-1bm0yy4"><svg class="search-icon svelte-1bm0yy4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="text" role="combobox" aria-expanded="true" aria-controls="swal-palette-list" class="svelte-1bm0yy4"/> <kbd class="svelte-1bm0yy4">ESC</kbd></div> <div class="results swal-scrollbar svelte-1bm0yy4" id="swal-palette-list" role="listbox"><!></div> <div class="footer svelte-1bm0yy4"><div><span class="svelte-1bm0yy4">↑↓ to navigate</span> <span class="svelte-1bm0yy4">↵ to select</span></div> <div> </div></div></div></div>');
function Ks(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "open", 15, !1), l = e.prop(t, "items", 19, () => []), i = e.prop(t, "placeholder", 3, "Type a command or search..."), r = e.prop(t, "footer", 3, "SWAL Command"), o = e.state(""), d = e.state(0), v = e.state(null);
  const p = e.derived(() => l().filter((g) => g.label.toLowerCase().includes(e.get(o).toLowerCase())));
  e.user_effect(() => {
    s() && (e.set(o, ""), e.set(d, 0), setTimeout(() => {
      var g;
      return (g = e.get(v)) == null ? void 0 : g.focus();
    }, 50));
  }), e.user_effect(() => {
    e.get(
      o
      // reset selection when the filter changes
    ), e.set(d, 0);
  });
  function h() {
    var g;
    s(!1), (g = t.onclose) == null || g.call(t);
  }
  function f(g) {
    var k;
    (k = g.action) == null || k.call(g), h();
  }
  function _(g) {
    if (g.key === "ArrowDown")
      g.preventDefault(), e.set(d, Math.min(e.get(d) + 1, e.get(p).length - 1), !0);
    else if (g.key === "ArrowUp")
      g.preventDefault(), e.set(d, Math.max(e.get(d) - 1, 0), !0);
    else if (g.key === "Enter") {
      g.preventDefault();
      const k = e.get(p)[e.get(d)];
      k && f(k);
    } else g.key === "Escape" && h();
  }
  var z = e.comment(), w = e.first_child(z);
  {
    var y = (g) => {
      var k = wt(), M = e.child(k), n = e.sibling(M, 2), u = e.child(n), x = e.sibling(e.child(u), 2);
      e.remove_input_defaults(x), e.bind_this(x, (c) => e.set(v, c), () => e.get(v)), e.next(2), e.reset(u);
      var m = e.sibling(u, 2), S = e.child(m);
      {
        var I = (c) => {
          var b = yt(), T = e.sibling(e.first_child(b), 2);
          e.each(T, 19, () => e.get(p), (N) => N.id, (N, P, L) => {
            var B = bt();
            let U;
            var F = e.child(B), G = e.only_child(F, !0), C = e.sibling(F, 2);
            {
              var R = (A) => {
                var V = gt(), Z = e.only_child(V, !0);
                e.template_effect(() => e.set_text(Z, e.get(P).hint)), e.append(A, V);
              };
              e.if(C, (A) => {
                e.get(P).hint && A(R);
              });
            }
            var D = e.sibling(C, 2);
            {
              var H = (A) => {
                var V = mt();
                e.append(A, V);
              };
              e.if(D, (A) => {
                e.get(L) === e.get(d) && A(H);
              });
            }
            e.reset(B), e.template_effect(() => {
              e.set_attribute(B, "id", `swal-palette-item-${e.get(P).id ?? ""}`), e.set_attribute(B, "aria-selected", e.get(L) === e.get(d)), U = e.set_class(B, 1, "item svelte-1bm0yy4", null, U, { active: e.get(L) === e.get(d) }), e.set_text(G, e.get(P).label);
            }), e.delegated("click", B, () => f(e.get(P))), e.event("mouseenter", B, () => e.set(d, e.get(L), !0)), e.append(N, B);
          }), e.append(c, b);
        }, j = (c) => {
          var b = xt(), T = e.only_child(b);
          e.template_effect(() => e.set_text(T, `No results found for "${e.get(o) ?? ""}"`)), e.append(c, b);
        };
        e.if(S, (c) => {
          e.get(p).length > 0 ? c(I) : c(j, -1);
        });
      }
      e.reset(m);
      var q = e.sibling(m, 2), O = e.sibling(e.child(q), 2), E = e.only_child(O, !0);
      e.reset(q), e.reset(n), e.reset(k), e.template_effect(() => {
        e.set_attribute(x, "placeholder", i()), e.set_attribute(x, "aria-activedescendant", e.get(p)[e.get(d)] ? `swal-palette-item-${e.get(p)[e.get(d)].id}` : void 0), e.set_text(E, r());
      }), e.delegated("click", M, h), e.delegated("keydown", x, _), e.bind_value(x, () => e.get(o), (c) => e.set(o, c)), e.transition(3, n, () => Se, () => ({ start: 0.95, duration: 200 })), e.transition(3, k, () => ze, () => ({ duration: 150 })), e.append(g, k);
    };
    e.if(w, (g) => {
      s() && g(y);
    });
  }
  e.append(a, z), e.pop();
}
e.delegate(["click", "keydown"]);
const he = e.proxy([]), kt = 5e3;
function de(a, t, s, l) {
  const i = Math.random().toString(36).substring(2, 9);
  return he.push({ id: i, type: a, message: t, title: s, duration: l }), a !== "loading" && setTimeout(() => Ee(i), l || kt), i;
}
function Ee(a) {
  const t = he.findIndex((s) => s.id === a);
  t !== -1 && he.splice(t, 1);
}
const se = {
  success: (a, t, s) => de("success", a, t, s),
  error: (a, t, s) => de("error", a, t, s),
  info: (a, t, s) => de("info", a, t, s),
  warning: (a, t, s) => de("warning", a, t, s),
  /** Devuelve el id para cerrarlo manualmente con toast.dismiss(id) */
  loading: (a, t) => de("loading", a, t),
  dismiss: Ee
};
var Mt = e.from_svg('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'), St = e.from_svg('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'), zt = e.from_svg('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'), Et = e.from_svg('<svg class="spin svelte-13bqgf0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>'), Tt = e.from_svg('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'), jt = e.from_html('<strong class="svelte-13bqgf0"> </strong>'), qt = e.from_html('<span class="progress-track svelte-13bqgf0" aria-hidden="true"><span></span></span>'), At = e.from_html('<div role="alert"><button class="content svelte-13bqgf0"><span class="icon svelte-13bqgf0" aria-hidden="true"><!></span> <span class="text svelte-13bqgf0"><!> <span class="message svelte-13bqgf0"> </span></span> <span class="close svelte-13bqgf0" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg></span></button> <span class="scanline svelte-13bqgf0" aria-hidden="true"></span> <!></div>'), Lt = e.from_html('<div class="swal-toaster svelte-13bqgf0" aria-live="polite"></div>');
function Ws(a, t) {
  e.push(t, !1);
  const s = 5e3;
  e.init();
  var l = Lt();
  e.each(l, 5, () => he, (i) => i.id, (i, r) => {
    var o = At(), d = e.child(o), v = e.child(d), p = e.child(v);
    {
      var h = (m) => {
        var S = Mt();
        e.append(m, S);
      }, f = (m) => {
        var S = St();
        e.append(m, S);
      }, _ = (m) => {
        var S = zt();
        e.append(m, S);
      }, z = (m) => {
        var S = Et();
        e.append(m, S);
      }, w = (m) => {
        var S = Tt();
        e.append(m, S);
      };
      e.if(p, (m) => {
        e.get(r).type === "success" ? m(h) : e.get(r).type === "error" ? m(f, 1) : e.get(r).type === "warning" ? m(_, 2) : e.get(r).type === "loading" ? m(z, 3) : m(w, -1);
      });
    }
    e.reset(v);
    var y = e.sibling(v, 2), g = e.child(y);
    {
      var k = (m) => {
        var S = jt(), I = e.only_child(S, !0);
        e.template_effect(() => e.set_text(I, e.get(r).title)), e.append(m, S);
      };
      e.if(g, (m) => {
        e.get(r).title && m(k);
      });
    }
    var M = e.sibling(g, 2), n = e.only_child(M, !0);
    e.reset(y), e.next(2), e.reset(d);
    var u = e.sibling(d, 4);
    {
      var x = (m) => {
        var S = qt(), I = e.only_child(S);
        e.template_effect(() => {
          e.set_class(I, 1, `progress-bar ${e.get(r).type ?? ""}`, "svelte-13bqgf0"), e.set_style(I, `animation-duration: ${(e.get(r).duration || s) ?? ""}ms;`);
        }), e.append(m, S);
      };
      e.if(u, (m) => {
        e.get(r).type !== "loading" && m(x);
      });
    }
    e.reset(o), e.template_effect(() => {
      e.set_class(o, 1, `swal-toast ${e.get(r).type ?? ""}`, "svelte-13bqgf0"), e.set_text(n, e.get(r).message);
    }), e.delegated("click", d, () => se.dismiss(e.get(r).id)), e.transition(3, o, () => Be, () => ({ x: 100, duration: 300 })), e.append(i, o);
  }), e.reset(l), e.append(a, l), e.pop();
}
e.delegate(["click"]);
var Ot = e.from_html('<div class="empty svelte-1lceyjc">WAITING_FOR_LOGS...</div>'), Ct = e.from_html('<span class="idx svelte-1lceyjc"> </span> <span class="lvl svelte-1lceyjc"> </span>', 1), Bt = e.from_html('<span class="idx svelte-1lceyjc"> </span>'), It = e.from_html('<div><!> <span class="msg svelte-1lceyjc"> </span></div>'), Nt = e.from_html('<div class="swal-logviewer svelte-1lceyjc"><h3 class="header svelte-1lceyjc"> </h3> <div class="body swal-scrollbar svelte-1lceyjc"><!></div></div>');
function Gs(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "lines", 19, () => []), l = e.prop(t, "filterLevel", 3, "debug"), i = e.prop(t, "autoScroll", 3, !0), r = e.prop(t, "maxHeight", 3, "300px"), o = e.prop(t, "title", 3, "Real-Time Log Stream");
  const d = { debug: 0, info: 1, warn: 2, error: 3 };
  let v = e.state(null);
  function p(n, u) {
    if (typeof n == "string") {
      const m = n.toUpperCase();
      let S = "info";
      return m.includes("ERROR") ? S = "error" : m.includes("WARN") ? S = "warn" : m.includes("DEBUG") ? S = "debug" : m.includes("INFO") && (S = "info"), { id: u, level: S, text: n, ts: "", isEntry: !1 };
    }
    const x = String((n == null ? void 0 : n.level) || "info").toLowerCase();
    return {
      id: u,
      level: x,
      text: (n == null ? void 0 : n.message) ?? "",
      ts: (n == null ? void 0 : n.timestamp) ?? "",
      isEntry: !0
    };
  }
  const h = e.derived(() => {
    const n = d[l()] ?? 0;
    return s().map(p).filter((u) => (d[u.level] ?? 0) >= n);
  });
  e.user_effect(() => {
    e.get(h).length, i() && e.get(v) && e.get(v).scrollTo({ top: e.get(v).scrollHeight, behavior: "smooth" });
  });
  function f(n) {
    switch (n) {
      case "error":
        return "lv-error";
      case "warn":
        return "lv-warn";
      case "info":
        return "lv-info";
      case "debug":
        return "lv-debug";
      default:
        return "";
    }
  }
  var _ = Nt(), z = e.child(_), w = e.only_child(z, !0), y = e.sibling(z, 2), g = e.child(y);
  {
    var k = (n) => {
      var u = Ot();
      e.append(n, u);
    }, M = (n) => {
      var u = e.comment(), x = e.first_child(u);
      e.each(x, 17, () => e.get(h), (m) => m.id, (m, S) => {
        var I = It(), j = e.child(I);
        {
          var q = (b) => {
            var T = Ct(), N = e.first_child(T), P = e.only_child(N, !0), L = e.sibling(N, 2), B = e.only_child(L, !0);
            e.template_effect(
              (U, F) => {
                e.set_text(P, U), e.set_text(B, F);
              },
              [
                () => e.get(S).ts ? `[${e.get(S).ts}]` : `[${String(e.get(S).id).padStart(3, "0")}]`,
                () => e.get(S).level.toUpperCase()
              ]
            ), e.append(b, T);
          }, O = (b) => {
            var T = Bt(), N = e.only_child(T);
            e.template_effect((P) => e.set_text(N, `[${P ?? ""}]`), [() => String(e.get(S).id).padStart(3, "0")]), e.append(b, T);
          };
          e.if(j, (b) => {
            e.get(S).isEntry ? b(q) : b(O, -1);
          });
        }
        var E = e.sibling(j, 2), c = e.only_child(E, !0);
        e.reset(I), e.template_effect(
          (b) => {
            e.set_class(I, 1, `line ${b ?? ""}`, "svelte-1lceyjc"), e.set_text(c, e.get(S).text);
          },
          [() => f(e.get(S).level)]
        ), e.append(m, I);
      }), e.append(n, u);
    };
    e.if(g, (n) => {
      e.get(h).length === 0 ? n(k) : n(M, -1);
    });
  }
  e.reset(y), e.bind_this(y, (n) => e.set(v, n), () => e.get(v)), e.reset(_), e.template_effect(() => {
    e.set_text(w, o()), e.set_style(y, `max-height: ${r() ?? ""};`);
  }), e.append(a, _), e.pop();
}
var Rt = e.from_html('<input type="checkbox" class="svelte-1sb6ach"/>'), Dt = e.from_html('<option class="svelte-1sb6ach"> </option>'), Pt = e.from_html('<select class="svelte-1sb6ach"></select>'), Ht = e.from_html('<input type="number" class="svelte-1sb6ach"/>'), Vt = e.from_html('<input type="text" class="svelte-1sb6ach"/>'), Ut = e.from_html('<label class="field svelte-1sb6ach"><span class="label svelte-1sb6ach"> </span> <!></label>'), Ft = e.from_html('<div class="swal-configeditor svelte-1sb6ach"><h3 class="title svelte-1sb6ach"> </h3> <div class="fields svelte-1sb6ach"></div> <div class="footer svelte-1sb6ach"><button class="save svelte-1sb6ach">Save Configuration</button></div></div>');
function Js(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "config", 19, () => ({})), l = e.prop(t, "schema", 19, () => []), i = e.prop(t, "title", 3, "Configuration"), r = e.state(e.proxy({ ...s() })), o = "";
  e.user_effect(() => {
    const M = JSON.stringify(s());
    M !== o && (o = M, e.set(r, { ...s() }, !0));
  });
  function d(M, n) {
    var u;
    e.get(r)[M] = n, (u = t.onchange) == null || u.call(t, { ...e.get(r) });
  }
  function v() {
    var n;
    const M = { ...e.get(r) };
    t.onsave ? t.onsave(M) : (n = t.onchange) == null || n.call(t, M);
  }
  function p(M) {
    return typeof M == "number" ? "number" : typeof M == "boolean" ? "boolean" : "string";
  }
  const h = e.derived(() => {
    const M = new Set(l().map((u) => u.key)), n = Object.keys(s()).filter((u) => !M.has(u)).map((u) => ({ key: u, label: u, type: p(s()[u]) }));
    return [...l(), ...n];
  });
  function f(M) {
    return (M ?? []).map((n) => typeof n == "string" ? { value: n, label: n } : n);
  }
  var _ = Ft(), z = e.child(_), w = e.only_child(z, !0), y = e.sibling(z, 2);
  e.each(y, 21, () => e.get(h), (M) => M.key, (M, n) => {
    var u = Ut(), x = e.child(u), m = e.only_child(x, !0), S = e.sibling(x, 2);
    {
      var I = (E) => {
        var c = Rt();
        e.remove_input_defaults(c), e.template_effect(() => {
          e.set_attribute(c, "id", `cfg-${e.get(n).key ?? ""}`), e.set_checked(c, !!e.get(r)[e.get(n).key]);
        }), e.delegated("change", c, (b) => d(e.get(n).key, b.currentTarget.checked)), e.append(E, c);
      }, j = (E) => {
        var c = Pt();
        e.each(c, 21, () => f(e.get(n).options), (T) => T.value, (T, N) => {
          var P = Dt(), L = e.only_child(P, !0), B = {};
          e.template_effect(() => {
            e.set_text(L, e.get(N).label), B !== (B = e.get(N).value) && (P.value = (P.__value = B) ?? "");
          }), e.append(T, P);
        }), e.reset(c);
        var b;
        e.init_select(c), e.template_effect(() => {
          e.set_attribute(c, "id", `cfg-${e.get(n).key ?? ""}`), b !== (b = e.get(r)[e.get(n).key] ?? "") && (c.value = (c.__value = b) ?? "", e.select_option(c, b));
        }), e.delegated("change", c, (T) => d(e.get(n).key, T.currentTarget.value)), e.append(E, c);
      }, q = (E) => {
        var c = Ht();
        e.remove_input_defaults(c), e.template_effect(() => {
          e.set_attribute(c, "id", `cfg-${e.get(n).key ?? ""}`), e.set_value(c, e.get(r)[e.get(n).key] ?? "");
        }), e.delegated("input", c, (b) => d(e.get(n).key, b.currentTarget.value === "" ? "" : Number(b.currentTarget.value))), e.append(E, c);
      }, O = (E) => {
        var c = Vt();
        e.remove_input_defaults(c), e.template_effect(() => {
          e.set_attribute(c, "id", `cfg-${e.get(n).key ?? ""}`), e.set_value(c, e.get(r)[e.get(n).key] ?? "");
        }), e.delegated("input", c, (b) => d(e.get(n).key, b.currentTarget.value)), e.append(E, c);
      };
      e.if(S, (E) => {
        e.get(n).type === "boolean" ? E(I) : e.get(n).type === "select" ? E(j, 1) : e.get(n).type === "number" ? E(q, 2) : E(O, -1);
      });
    }
    e.reset(u), e.template_effect(() => {
      e.set_attribute(u, "for", `cfg-${e.get(n).key ?? ""}`), e.set_text(m, e.get(n).label);
    }), e.append(M, u);
  }), e.reset(y);
  var g = e.sibling(y, 2), k = e.only_child(g);
  e.reset(_), e.template_effect(() => e.set_text(w, i())), e.delegated("click", k, v), e.append(a, _), e.pop();
}
e.delegate(["change", "input", "click"]);
var Kt = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "sidebarOpen",
  "brand",
  "sidebarNav",
  "sidebarFooter",
  "headerActions",
  "children"
]), Wt = e.from_html('<button class="sidebar-backdrop svelte-105smtm" aria-label="Close sidebar"></button>'), Gt = e.from_html('<div class="default-brand svelte-105smtm"><span class="swal-neon-cyan">SWAL</span> <span class="brand-sub svelte-105smtm">EDGE</span></div>'), Jt = e.from_html('<div class="placeholder-text svelte-105smtm">No navigation configured</div>'), Yt = e.from_html('<div class="sidebar-footer svelte-105smtm"><!></div>'), Qt = e.from_html('<div><!> <aside class="swal-sidebar svelte-105smtm"><div class="sidebar-header svelte-105smtm"><!> <button class="mobile-close svelte-105smtm" aria-label="Close sidebar">✕</button></div> <div class="sidebar-nav-container swal-scrollbar svelte-105smtm"><!></div> <!></aside> <div class="swal-main-area svelte-105smtm"><header class="swal-header svelte-105smtm"><button class="sidebar-toggle svelte-105smtm" aria-label="Toggle sidebar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> <div class="header-actions svelte-105smtm"><!></div></header> <main class="swal-content-container swal-scrollbar svelte-105smtm"><!></main></div></div>');
function Ys(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "sidebarOpen", 15, !0), l = e.rest_props(t, Kt);
  function i() {
    s(!s());
  }
  var r = Qt();
  e.attribute_effect(
    r,
    () => ({
      class: "swal-dashboard",
      ...l,
      [e.CLASS]: { "sidebar-collapsed": !s() }
    }),
    void 0,
    void 0,
    void 0,
    "svelte-105smtm"
  );
  var o = e.child(r);
  {
    var d = (E) => {
      var c = Wt();
      e.delegated("click", c, i), e.append(E, c);
    };
    e.if(o, (E) => {
      s() && E(d);
    });
  }
  var v = e.sibling(o, 2), p = e.child(v), h = e.child(p);
  {
    var f = (E) => {
      var c = e.comment(), b = e.first_child(c);
      e.snippet(b, () => t.brand), e.append(E, c);
    }, _ = (E) => {
      var c = Gt();
      e.append(E, c);
    };
    e.if(h, (E) => {
      t.brand ? E(f) : E(_, -1);
    });
  }
  var z = e.sibling(h, 2);
  e.reset(p);
  var w = e.sibling(p, 2), y = e.child(w);
  {
    var g = (E) => {
      var c = e.comment(), b = e.first_child(c);
      e.snippet(b, () => t.sidebarNav), e.append(E, c);
    }, k = (E) => {
      var c = Jt();
      e.append(E, c);
    };
    e.if(y, (E) => {
      t.sidebarNav ? E(g) : E(k, -1);
    });
  }
  e.reset(w);
  var M = e.sibling(w, 2);
  {
    var n = (E) => {
      var c = Yt(), b = e.child(c);
      e.snippet(b, () => t.sidebarFooter), e.reset(c), e.append(E, c);
    };
    e.if(M, (E) => {
      t.sidebarFooter && E(n);
    });
  }
  e.reset(v);
  var u = e.sibling(v, 2), x = e.child(u), m = e.child(x), S = e.sibling(m, 2), I = e.child(S);
  {
    var j = (E) => {
      var c = e.comment(), b = e.first_child(c);
      e.snippet(b, () => t.headerActions), e.append(E, c);
    };
    e.if(I, (E) => {
      t.headerActions && E(j);
    });
  }
  e.reset(S), e.reset(x);
  var q = e.sibling(x, 2), O = e.child(q);
  e.snippet(O, () => t.children ?? e.noop), e.reset(q), e.reset(u), e.reset(r), e.delegated("click", z, i), e.delegated("click", m, i), e.append(a, r), e.pop();
}
e.delegate(["click"]);
var Zt = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "items",
  "speed",
  "paused",
  "interactive",
  "onclick"
]), Xt = e.from_html('<span><span class="ticker-bullet svelte-1nnjknr" aria-hidden="true"></span> <span class="ticker-text svelte-1nnjknr"> </span></span>'), $t = e.from_html('<span><span class="ticker-bullet svelte-1nnjknr"></span> <span class="ticker-text svelte-1nnjknr"> </span></span>'), ea = e.from_html('<div><div class="ticker-content svelte-1nnjknr"><div class="ticker-track svelte-1nnjknr"></div> <div class="ticker-track ticker-clone svelte-1nnjknr" aria-hidden="true"></div></div></div>');
function Qs(a, t) {
  let s = e.prop(t, "items", 19, () => []), l = e.prop(
    t,
    "speed",
    3,
    "normal"
    // 'slow' | 'normal' | 'fast'
  ), i = e.prop(t, "paused", 3, !1), r = e.prop(t, "interactive", 3, !0), o = e.rest_props(t, Zt);
  const d = { fast: "15s", normal: "30s", slow: "60s" };
  let v = e.derived(() => d[l()] || d.normal);
  var p = ea();
  e.attribute_effect(
    p,
    () => ({
      class: "swal-global-ticker-container",
      role: "status",
      onclick: t.onclick,
      ...o,
      [e.CLASS]: { interactive: r(), paused: i() }
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1nnjknr"
  );
  var h = e.child(p), f = e.child(h);
  e.each(f, 21, s, e.index, (z, w) => {
    var y = Xt(), g = e.sibling(e.child(y), 2), k = e.only_child(g, !0);
    e.reset(y), e.template_effect(() => {
      e.set_class(y, 1, `ticker-item type-${(typeof e.get(w) == "object" ? e.get(w).type : "info") ?? ""}`, "svelte-1nnjknr"), e.set_text(k, typeof e.get(w) == "object" ? e.get(w).text : e.get(w));
    }), e.append(z, y);
  }), e.reset(f);
  var _ = e.sibling(f, 2);
  e.each(_, 21, s, e.index, (z, w) => {
    var y = $t(), g = e.sibling(e.child(y), 2), k = e.only_child(g, !0);
    e.reset(y), e.template_effect(() => {
      e.set_class(y, 1, `ticker-item type-${(typeof e.get(w) == "object" ? e.get(w).type : "info") ?? ""}`, "svelte-1nnjknr"), e.set_text(k, typeof e.get(w) == "object" ? e.get(w).text : e.get(w));
    }), e.append(z, y);
  }), e.reset(_), e.reset(h), e.reset(p), e.template_effect(() => e.set_style(h, `--ticker-duration: ${e.get(v) ?? ""}`)), e.append(a, p);
}
var ta = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "title",
  "subtitle",
  "heroButtonText",
  "onHeroClick",
  "features",
  "stats",
  "brandLogo",
  "navLinks",
  "footerText",
  "children"
]), aa = e.from_html('<span class="logo-text swal-neon-cyan">SWAL</span> <span class="logo-sub swal-neon-orange svelte-33qn5r">HIVE</span>', 1), sa = e.from_html('<a class="nav-link svelte-33qn5r"> </a>'), ra = e.from_html('<nav class="nav-links svelte-33qn5r"></nav>'), la = e.from_html('<div class="stat-trend svelte-33qn5r"> </div>'), ia = e.from_html('<div class="stat-value swal-neon-cyan svelte-33qn5r"> </div> <div class="stat-label svelte-33qn5r"> </div> <!>', 1), na = e.from_html('<section class="stats-section svelte-33qn5r"><div class="stats-grid svelte-33qn5r"></div></section>'), oa = e.from_html('<div class="feature-icon svelte-33qn5r"><!></div>'), da = e.from_html('<div class="feature-icon swal-neon-orange svelte-33qn5r">◆</div>'), ca = e.from_html('<div class="feature-header svelte-33qn5r"><!> <h3 class="feature-title svelte-33qn5r"> </h3></div> <p class="feature-description svelte-33qn5r"> </p>', 1), va = e.from_html('<section class="features-section svelte-33qn5r"><h2 class="section-title svelte-33qn5r">Ecosystem Capabilities</h2> <div class="features-grid svelte-33qn5r"></div></section>'), ua = e.from_html('<section class="custom-content-section svelte-33qn5r"><!></section>'), fa = e.from_html('<div><header class="landing-header svelte-33qn5r"><div class="brand svelte-33qn5r"><!></div> <!> <div class="header-actions svelte-33qn5r"><!> <!></div></header> <section class="hero-section svelte-33qn5r"><div class="hero-content swal-enter svelte-33qn5r"><div class="tag-container svelte-33qn5r"><span class="swal-neon-orange-badge svelte-33qn5r">NODE STATUS: ACTIVE</span></div> <h1 class="hero-title svelte-33qn5r"> </h1> <p class="hero-subtitle svelte-33qn5r"> </p> <div class="hero-cta svelte-33qn5r"><!> <!></div></div></section> <!> <!> <!> <footer class="landing-footer svelte-33qn5r"><p> </p></footer></div>');
function Zs(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "title", 3, "SWAL Ecosystem"), l = e.prop(t, "subtitle", 3, "Decentralized Edge Intelligence & Mesh Orchestration"), i = e.prop(t, "heroButtonText", 3, "Initialize Node"), r = e.prop(t, "features", 19, () => []), o = e.prop(t, "stats", 19, () => []), d = e.prop(t, "navLinks", 19, () => []), v = e.prop(t, "footerText", 3, "SWAL Ecosystem © 2026. All rights reserved."), p = e.rest_props(t, ta);
  var h = fa();
  e.attribute_effect(
    h,
    () => ({
      class: "swal-landing swal-grid-bg swal-dvh swal-safe-area swal-touch",
      ...p
    }),
    void 0,
    void 0,
    void 0,
    "svelte-33qn5r"
  );
  var f = e.child(h), _ = e.child(f), z = e.child(_);
  {
    var w = (C) => {
      var R = e.comment(), D = e.first_child(R);
      e.snippet(D, () => t.brandLogo), e.append(C, R);
    }, y = (C) => {
      var R = aa();
      e.next(2), e.append(C, R);
    };
    e.if(z, (C) => {
      t.brandLogo ? C(w) : C(y, -1);
    });
  }
  e.reset(_);
  var g = e.sibling(_, 2);
  {
    var k = (C) => {
      var R = ra();
      e.each(R, 21, d, e.index, (D, H) => {
        var A = sa(), V = e.only_child(A, !0);
        e.template_effect(() => {
          e.set_attribute(A, "href", e.get(H).href), e.set_text(V, e.get(H).text);
        }), e.append(D, A);
      }), e.reset(R), e.append(C, R);
    };
    e.if(g, (C) => {
      d().length > 0 && C(k);
    });
  }
  var M = e.sibling(g, 2), n = e.child(M);
  fe(n, {
    variant: "ghost",
    size: "sm",
    get onclick() {
      return t.onHeroClick;
    },
    children: (C, R) => {
      e.next();
      var D = e.text("Docs");
      e.append(C, D);
    },
    $$slots: { default: !0 }
  });
  var u = e.sibling(n, 2);
  fe(u, {
    variant: "primary",
    size: "sm",
    get onclick() {
      return t.onHeroClick;
    },
    children: (C, R) => {
      e.next();
      var D = e.text("Launch App");
      e.append(C, D);
    },
    $$slots: { default: !0 }
  }), e.reset(M), e.reset(f);
  var x = e.sibling(f, 2), m = e.child(x), S = e.sibling(e.child(m), 2), I = e.only_child(S, !0), j = e.sibling(S, 2), q = e.only_child(j, !0), O = e.sibling(j, 2), E = e.child(O);
  fe(E, {
    variant: "orange",
    size: "lg",
    get onclick() {
      return t.onHeroClick;
    },
    children: (C, R) => {
      e.next();
      var D = e.text();
      e.template_effect(() => e.set_text(D, i())), e.append(C, D);
    },
    $$slots: { default: !0 }
  });
  var c = e.sibling(E, 2);
  fe(c, {
    variant: "secondary",
    size: "lg",
    get onclick() {
      return t.onHeroClick;
    },
    children: (C, R) => {
      e.next();
      var D = e.text("Explore Mesh");
      e.append(C, D);
    },
    $$slots: { default: !0 }
  }), e.reset(O), e.reset(m), e.reset(x);
  var b = e.sibling(x, 2);
  {
    var T = (C) => {
      var R = na(), D = e.child(R);
      e.each(D, 21, o, e.index, (H, A) => {
        be(H, {
          variant: "glass",
          padding: "md",
          class: "stat-card",
          children: (V, Z) => {
            var K = ia(), X = e.first_child(K), $ = e.only_child(X, !0), ee = e.sibling(X, 2), le = e.only_child(ee, !0), te = e.sibling(ee, 2);
            {
              var re = (ae) => {
                var Y = la(), W = e.only_child(Y, !0);
                e.template_effect(() => e.set_text(W, e.get(A).trend)), e.append(ae, Y);
              };
              e.if(te, (ae) => {
                e.get(A).trend && ae(re);
              });
            }
            e.template_effect(() => {
              e.set_text($, e.get(A).value), e.set_text(le, e.get(A).label);
            }), e.append(V, K);
          },
          $$slots: { default: !0 }
        });
      }), e.reset(D), e.reset(R), e.append(C, R);
    };
    e.if(b, (C) => {
      o().length > 0 && C(T);
    });
  }
  var N = e.sibling(b, 2);
  {
    var P = (C) => {
      var R = va(), D = e.sibling(e.child(R), 2);
      e.each(D, 21, r, e.index, (H, A) => {
        be(H, {
          variant: "surface",
          padding: "lg",
          hoverable: !0,
          class: "feature-card",
          children: (V, Z) => {
            var K = ca(), X = e.first_child(K), $ = e.child(X);
            {
              var ee = (W) => {
                var J = oa(), ie = e.child(J);
                e.snippet(ie, () => e.get(A).icon), e.reset(J), e.append(W, J);
              }, le = (W) => {
                var J = da();
                e.append(W, J);
              };
              e.if($, (W) => {
                e.get(A).icon ? W(ee) : W(le, -1);
              });
            }
            var te = e.sibling($, 2), re = e.only_child(te, !0);
            e.reset(X);
            var ae = e.sibling(X, 2), Y = e.only_child(ae, !0);
            e.template_effect(() => {
              e.set_text(re, e.get(A).title), e.set_text(Y, e.get(A).description);
            }), e.append(V, K);
          },
          $$slots: { default: !0 }
        });
      }), e.reset(D), e.reset(R), e.append(C, R);
    };
    e.if(N, (C) => {
      r().length > 0 && C(P);
    });
  }
  var L = e.sibling(N, 2);
  {
    var B = (C) => {
      var R = ua(), D = e.child(R);
      e.snippet(D, () => t.children), e.reset(R), e.append(C, R);
    };
    e.if(L, (C) => {
      t.children && C(B);
    });
  }
  var U = e.sibling(L, 2), F = e.child(U), G = e.only_child(F, !0);
  e.reset(U), e.reset(h), e.template_effect(() => {
    e.set_text(I, s()), e.set_text(q, l()), e.set_text(G, v());
  }), e.append(a, h), e.pop();
}
var pa = e.from_svg('<rect width="5" height="5" rx="1" fill="black"></rect>'), ha = e.from_html('<div role="img"><svg viewBox="0 0 100 100" class="qr-svg svelte-1reoa06" aria-hidden="true"><rect x="0" y="0" width="100" height="100" rx="8" fill="white"></rect><rect x="6" y="6" width="28" height="28" rx="4" fill="black"></rect><rect x="66" y="6" width="28" height="28" rx="4" fill="black"></rect><rect x="6" y="66" width="28" height="28" rx="4" fill="black"></rect><rect x="10" y="10" width="20" height="20" rx="3" fill="white"></rect><rect x="70" y="10" width="20" height="20" rx="3" fill="white"></rect><rect x="10" y="70" width="20" height="20" rx="3" fill="white"></rect><rect x="14" y="14" width="12" height="12" rx="2" fill="black"></rect><rect x="74" y="14" width="12" height="12" rx="2" fill="black"></rect><rect x="14" y="74" width="12" height="12" rx="2" fill="black"></rect><!></svg> <span class="qr-value svelte-1reoa06"> </span></div>');
function Xs(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "value", 3, ""), l = e.prop(t, "size", 3, 160), i = e.prop(t, "title", 3, "QR code"), r = e.prop(t, "class", 3, "");
  e.derived(() => "var(--swal-surface)");
  var o = ha(), d = e.child(o), v = e.sibling(e.child(d), 10);
  e.each(v, 16, () => Array(8), e.index, (f, _, z) => {
    var w = e.comment(), y = e.first_child(w);
    e.each(y, 16, () => Array(8), e.index, (g, k, M) => {
      var n = e.comment(), u = e.first_child(n);
      {
        var x = (m) => {
          var S = pa();
          e.set_attribute(S, "x", 40 + M * 6), e.set_attribute(S, "y", 40 + z * 6), e.append(m, S);
        };
        e.if(u, (m) => {
          (s().length + z * 3 + M * 7) % 3 === 0 && m(x);
        });
      }
      e.append(g, n);
    }), e.append(f, w);
  }), e.reset(d);
  var p = e.sibling(d, 2), h = e.only_child(p, !0);
  e.reset(o), e.template_effect(() => {
    e.set_class(o, 1, `qr-wrap ${r() ?? ""}`, "svelte-1reoa06"), e.set_style(o, `width:${l() ?? ""}px;height:${l() ?? ""}px;`), e.set_attribute(o, "aria-label", i()), e.set_attribute(d, "width", l()), e.set_attribute(d, "height", l()), e.set_text(h, s());
  }), e.append(a, o), e.pop();
}
const ce = (a) => !!a && typeof a == "object" && !Array.isArray(a);
function _a(a, t) {
  switch (a.type) {
    case "toggle":
      return typeof t == "boolean" ? t : a.default;
    case "select":
      return typeof t == "string" && (a.choices ?? []).some((s) => s.value === t) ? t : a.default;
    case "number": {
      if (typeof t != "number" || !Number.isFinite(t)) return a.default;
      const s = a.min ?? -1 / 0, l = a.max ?? 1 / 0;
      return Math.min(l, Math.max(s, t));
    }
    default:
      return a.default;
  }
}
function ga(a) {
  return Te(a, void 0);
}
function Te(a, t) {
  const s = ce(t) ? t : {}, l = ce(s.modules) ? s.modules : {}, i = ce(s.panels) ? s.panels : {}, r = {};
  for (const v of a.modules) {
    const p = l[v.id];
    r[v.id] = v.required ? !0 : typeof p == "boolean" ? p : v.default;
  }
  const o = {};
  for (const v of a.panels) {
    const p = ce(i[v.id]) ? i[v.id] : {}, h = ce(p.options) ? p.options : {}, f = {};
    for (const _ of v.options ?? []) f[_.id] = _a(_, h[_.id]);
    o[v.id] = {
      enabled: v.required ? !0 : typeof p.enabled == "boolean" ? p.enabled : v.default,
      options: f
    };
  }
  const d = typeof s.preset == "string" && (a.presets ?? []).some((v) => v.id === s.preset) ? s.preset : void 0;
  return {
    version: a.version,
    onboarded: s.version === a.version && s.onboarded === !0,
    ...d ? { preset: d } : {},
    modules: r,
    panels: o,
    ...typeof s.updatedAt == "string" ? { updatedAt: s.updatedAt } : {}
  };
}
function ma(a, t, s) {
  const l = (a.presets ?? []).find((r) => r.id === s);
  if (!l) return t;
  const i = { ...t, preset: s, modules: { ...t.modules }, panels: { ...t.panels } };
  for (const [r, o] of Object.entries(l.modules ?? {})) r in i.modules && (i.modules[r] = o);
  for (const [r, o] of Object.entries(l.panels ?? {})) r in i.panels && (i.panels[r] = { ...i.panels[r], enabled: o });
  return Te(a, i);
}
function ba(a) {
  const t = [];
  for (const s of a.modules) {
    let l = t.find((i) => i.group === s.group);
    l || t.push(l = { group: s.group, modules: [] }), l.modules.push(s);
  }
  return t;
}
function ya(a) {
  const t = [];
  for (const s of a.panels) {
    let l = t.find((i) => i.scope === s.scope);
    l || t.push(l = { scope: s.scope, panels: [] }), l.panels.push(s);
  }
  return t;
}
var ye = e.from_html('<span class="help lock svelte-sizkkn">Siempre visible</span>'), xe = e.from_html('<span class="help svelte-sizkkn"> </span>'), xa = e.from_html('<li class="swal-card-frame svelte-sizkkn"><div class="swal-card-inner row svelte-sizkkn"><label class="txt svelte-sizkkn"><span class="name svelte-sizkkn"> </span> <!></label> <input type="checkbox" role="switch" class="sw svelte-sizkkn"/></div></li>'), we = e.from_html('<h3 class="swal-kicker head svelte-sizkkn"><span class="swal-tick" aria-hidden="true"></span> </h3> <ul class="grid svelte-sizkkn"></ul>', 1), wa = e.from_html('<section class="sec svelte-sizkkn" aria-label="Menú"></section>'), ka = e.from_html('<label class="olabel svelte-sizkkn"> </label> <input type="checkbox" role="switch" class="sw svelte-sizkkn"/>', 1), Ma = e.from_html('<button type="button"> </button>'), Sa = e.from_html('<span class="olabel svelte-sizkkn"> </span> <div class="seg svelte-sizkkn" role="group"></div>', 1), za = e.from_html('<label class="olabel svelte-sizkkn"> </label> <input type="number" class="num svelte-sizkkn"/>', 1), Ea = e.from_html('<span class="help full svelte-sizkkn"> </span>'), Ta = e.from_html("<div><!> <!></div>"), ja = e.from_html('<li class="swal-card-frame svelte-sizkkn"><div class="swal-card-inner panel svelte-sizkkn"><div class="row svelte-sizkkn"><label class="txt svelte-sizkkn"><span class="name svelte-sizkkn"> </span> <!></label> <input type="checkbox" role="switch" class="sw svelte-sizkkn"/></div> <!></div></li>'), qa = e.from_html('<section class="sec svelte-sizkkn" aria-label="Paneles"></section>'), Aa = e.from_html('<div class="pe svelte-sizkkn" data-testid="prefs-editor"><!> <!></div>');
function ke(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "sections", 19, () => ["modules", "panels"]);
  const l = `pe${Math.random().toString(36).slice(2, 8)}`, i = e.derived(() => ba(t.schema)), r = e.derived(() => ya(t.schema));
  function o(u, x) {
    t.onchange({
      ...t.value,
      modules: { ...t.value.modules, [u]: x }
    });
  }
  function d(u, x) {
    const m = t.value.panels[u] ?? { enabled: !0, options: {} };
    t.onchange({
      ...t.value,
      panels: { ...t.value.panels, [u]: { ...m, enabled: x } }
    });
  }
  function v(u, x, m) {
    const S = t.value.panels[u] ?? { enabled: !0, options: {} };
    t.onchange({
      ...t.value,
      panels: {
        ...t.value.panels,
        [u]: { ...S, options: { ...S.options, [x]: m } }
      }
    });
  }
  function p(u, x, m, S, I) {
    const j = m.currentTarget, q = Number(j.value);
    j.value === "" || !Number.isFinite(q) || v(u, x, Math.min(I ?? 1 / 0, Math.max(S ?? -1 / 0, q)));
  }
  const h = (u, x) => t.value.modules[u] ?? x, f = (u, x) => {
    var m;
    return ((m = t.value.panels[u]) == null ? void 0 : m.enabled) ?? x;
  }, _ = (u, x, m) => {
    var S, I;
    return ((I = (S = t.value.panels[u]) == null ? void 0 : S.options) == null ? void 0 : I[x]) ?? m;
  };
  var z = Aa(), w = e.child(z);
  {
    var y = (u) => {
      var x = wa();
      e.each(x, 21, () => e.get(i), (m) => m.group, (m, S) => {
        var I = we(), j = e.first_child(I), q = e.sibling(e.child(j));
        e.reset(j);
        var O = e.sibling(j, 2);
        e.each(O, 21, () => e.get(S).modules, (E) => E.id, (E, c) => {
          const b = e.derived(() => e.get(c).required ? !0 : h(e.get(c).id, e.get(c).default));
          var T = xa(), N = e.child(T), P = e.child(N), L = e.child(P), B = e.only_child(L, !0), U = e.sibling(L, 2);
          {
            var F = (R) => {
              var D = ye();
              e.append(R, D);
            }, G = (R) => {
              var D = xe(), H = e.only_child(D, !0);
              e.template_effect(() => e.set_text(H, e.get(c).help)), e.append(R, D);
            };
            e.if(U, (R) => {
              e.get(c).required ? R(F) : e.get(c).help && R(G, 1);
            });
          }
          e.reset(P);
          var C = e.sibling(P, 2);
          e.remove_input_defaults(C), e.reset(N), e.reset(T), e.template_effect(() => {
            e.set_attribute(P, "for", `${l}-m-${e.get(c).id ?? ""}`), e.set_text(B, e.get(c).label), e.set_attribute(C, "id", `${l}-m-${e.get(c).id ?? ""}`), e.set_checked(C, e.get(b)), C.disabled = e.get(c).required;
          }), e.delegated("change", C, (R) => o(e.get(c).id, R.currentTarget.checked)), e.append(E, T);
        }), e.reset(O), e.template_effect(() => e.set_text(q, ` ${e.get(S).group ?? ""}`)), e.append(m, I);
      }), e.reset(x), e.append(u, x);
    }, g = e.derived(() => s().includes("modules"));
    e.if(w, (u) => {
      e.get(g) && u(y);
    });
  }
  var k = e.sibling(w, 2);
  {
    var M = (u) => {
      var x = qa();
      e.each(x, 21, () => e.get(r), (m) => m.scope, (m, S) => {
        var I = we(), j = e.first_child(I), q = e.sibling(e.child(j));
        e.reset(j);
        var O = e.sibling(j, 2);
        e.each(O, 21, () => e.get(S).panels, (E) => E.id, (E, c) => {
          const b = e.derived(() => e.get(c).required ? !0 : f(e.get(c).id, e.get(c).default));
          var T = ja(), N = e.child(T), P = e.child(N), L = e.child(P), B = e.child(L), U = e.only_child(B, !0), F = e.sibling(B, 2);
          {
            var G = (H) => {
              var A = ye();
              e.append(H, A);
            }, C = (H) => {
              var A = xe(), V = e.only_child(A, !0);
              e.template_effect(() => e.set_text(V, e.get(c).help)), e.append(H, A);
            };
            e.if(F, (H) => {
              e.get(c).required ? H(G) : e.get(c).help && H(C, 1);
            });
          }
          e.reset(L);
          var R = e.sibling(L, 2);
          e.remove_input_defaults(R), e.reset(P);
          var D = e.sibling(P, 2);
          e.each(D, 17, () => e.get(c).options ?? [], (H) => H.id, (H, A) => {
            const V = e.derived(() => `${l}-o-${e.get(c).id}-${e.get(A).id}`), Z = e.derived(() => _(e.get(c).id, e.get(A).id, e.get(A).default));
            var K = Ta();
            let X;
            var $ = e.child(K);
            {
              var ee = (Y) => {
                var W = ka(), J = e.first_child(W), ie = e.only_child(J, !0), Q = e.sibling(J, 2);
                e.remove_input_defaults(Q), e.template_effect(() => {
                  e.set_attribute(J, "for", e.get(V)), e.set_text(ie, e.get(A).label), e.set_attribute(Q, "id", e.get(V)), e.set_checked(Q, e.get(Z) === !0), Q.disabled = !e.get(b);
                }), e.delegated("change", Q, (ne) => v(e.get(c).id, e.get(A).id, ne.currentTarget.checked)), e.append(Y, W);
              }, le = (Y) => {
                var W = Sa(), J = e.first_child(W), ie = e.only_child(J, !0), Q = e.sibling(J, 2);
                e.each(Q, 21, () => e.get(A).choices ?? [], (ne) => ne.value, (ne, ue) => {
                  var oe = Ma();
                  let me;
                  var Ce = e.only_child(oe, !0);
                  e.template_effect(() => {
                    me = e.set_class(oe, 1, "segbtn svelte-sizkkn", null, me, { on: e.get(Z) === e.get(ue).value }), e.set_attribute(oe, "aria-pressed", e.get(Z) === e.get(ue).value), oe.disabled = !e.get(b), e.set_text(Ce, e.get(ue).label);
                  }), e.delegated("click", oe, () => v(e.get(c).id, e.get(A).id, e.get(ue).value)), e.append(ne, oe);
                }), e.reset(Q), e.template_effect(() => {
                  e.set_attribute(J, "id", `${e.get(V) ?? ""}-l`), e.set_text(ie, e.get(A).label), e.set_attribute(Q, "aria-labelledby", `${e.get(V) ?? ""}-l`);
                }), e.append(Y, W);
              }, te = (Y) => {
                var W = za(), J = e.first_child(W), ie = e.only_child(J, !0), Q = e.sibling(J, 2);
                e.remove_input_defaults(Q), e.template_effect(() => {
                  e.set_attribute(J, "for", e.get(V)), e.set_text(ie, e.get(A).label), e.set_attribute(Q, "id", e.get(V)), e.set_value(Q, e.get(Z)), e.set_attribute(Q, "min", e.get(A).min), e.set_attribute(Q, "max", e.get(A).max), e.set_attribute(Q, "step", e.get(A).step ?? 1), Q.disabled = !e.get(b);
                }), e.delegated("change", Q, (ne) => p(e.get(c).id, e.get(A).id, ne, e.get(A).min, e.get(A).max)), e.append(Y, W);
              };
              e.if($, (Y) => {
                e.get(A).type === "toggle" ? Y(ee) : e.get(A).type === "select" ? Y(le, 1) : Y(te, -1);
              });
            }
            var re = e.sibling($, 2);
            {
              var ae = (Y) => {
                var W = Ea(), J = e.only_child(W, !0);
                e.template_effect(() => e.set_text(J, e.get(A).help)), e.append(Y, W);
              };
              e.if(re, (Y) => {
                e.get(A).help && Y(ae);
              });
            }
            e.reset(K), e.template_effect(() => X = e.set_class(K, 1, "opt svelte-sizkkn", null, X, { off: !e.get(b) })), e.append(H, K);
          }), e.reset(N), e.reset(T), e.template_effect(() => {
            e.set_attribute(L, "for", `${l}-p-${e.get(c).id ?? ""}`), e.set_text(U, e.get(c).label), e.set_attribute(R, "id", `${l}-p-${e.get(c).id ?? ""}`), e.set_checked(R, e.get(b)), R.disabled = e.get(c).required;
          }), e.delegated("change", R, (H) => d(e.get(c).id, H.currentTarget.checked)), e.append(E, T);
        }), e.reset(O), e.template_effect(() => e.set_text(q, ` ${e.get(S).scope ?? ""}`)), e.append(m, I);
      }), e.reset(x), e.append(u, x);
    }, n = e.derived(() => s().includes("panels"));
    e.if(k, (u) => {
      e.get(n) && u(M);
    });
  }
  e.reset(z), e.append(a, z), e.pop();
}
e.delegate(["change", "click"]);
var La = e.from_html("<span></span>"), Oa = e.from_html('<button type="button" class="skip svelte-15y04s2">Omitir</button>'), Ca = e.from_html('<span class="desc svelte-15y04s2"> </span>'), Ba = e.from_html('<li><button type="button" class="swal-card-inner card svelte-15y04s2"><span class="name svelte-15y04s2"> </span> <!></button></li>'), Ia = e.from_html('<section aria-labelledby="wz-h1"><h1 id="wz-h1" class="h svelte-15y04s2"> </h1> <p class="lead svelte-15y04s2">Elige un punto de partida. Podrás ajustar el menú y los paneles en los pasos siguientes y cambiarlo cuando quieras en Ajustes.</p> <ul class="presets svelte-15y04s2"><!> <li class="swal-card-frame"><button type="button" class="swal-card-inner card svelte-15y04s2"><span class="name svelte-15y04s2">Empezar desde cero</span> <span class="desc svelte-15y04s2">Valores por defecto, sin perfil.</span></button></li></ul></section>'), Na = e.from_html('<section aria-labelledby="wz-h2"><h1 class="h svelte-15y04s2"><span id="wz-h2">Menú</span></h1> <p class="lead svelte-15y04s2">Elige qué secciones aparecen en el menú lateral.</p> <!></section>'), Ra = e.from_html('<section aria-labelledby="wz-h3"><h1 class="h svelte-15y04s2"><span id="wz-h3">Paneles</span></h1> <p class="lead svelte-15y04s2">Decide qué paneles y ayudas aparecen dentro de cada pantalla.</p> <!></section>'), Da = e.from_html('<section aria-labelledby="wz-h4"><h1 class="h svelte-15y04s2"><span id="wz-h4">Listo</span></h1> <p class="lead svelte-15y04s2">Tu interfaz está configurada.</p> <ul class="summary svelte-15y04s2"><li class="swal-card-frame"><div class="swal-card-inner sum svelte-15y04s2"><strong data-testid="sum-modules" class="svelte-15y04s2"> </strong><span class="svelte-15y04s2"> </span></div></li> <li class="swal-card-frame"><div class="swal-card-inner sum svelte-15y04s2"><strong data-testid="sum-panels" class="svelte-15y04s2"> </strong><span class="svelte-15y04s2"> </span></div></li></ul></section>'), Pa = e.from_html('<button type="button" class="btn primary svelte-15y04s2">Siguiente</button>'), Ha = e.from_html('<button type="button" class="btn primary svelte-15y04s2">Entrar</button>'), Va = e.from_html('<div class="wz swal-blueprint-bg svelte-15y04s2" data-testid="onboarding-wizard"><div class="sheet svelte-15y04s2"><header class="top svelte-15y04s2"><div class="steps svelte-15y04s2" aria-hidden="true"></div> <p class="swal-kicker svelte-15y04s2" data-testid="wizard-step" aria-live="polite"> </p> <!></header> <!> <footer class="nav svelte-15y04s2"><button type="button" class="btn ghost svelte-15y04s2">Atrás</button> <!></footer></div></div>');
function $s(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "title", 3, "Bienvenido");
  const l = 4;
  let i = e.state(1), r = e.state(!1), o = e.state(e.proxy(structuredClone(e.snapshot(t.value))));
  const d = e.derived(() => t.schema.presets ?? []), v = e.derived(() => Object.values(e.get(o).modules).filter(Boolean).length), p = e.derived(() => Object.keys(e.get(o).modules).length), h = e.derived(() => Object.values(e.get(o).panels).filter((L) => L.enabled).length), f = e.derived(() => Object.keys(e.get(o).panels).length);
  function _(L) {
    e.set(o, ma(t.schema, e.get(o), L), !0);
  }
  function z() {
    const L = ga(t.schema);
    e.set(o, { ...L, onboarded: e.get(o).onboarded }, !0);
  }
  function w(L) {
    e.set(o, L, !0);
  }
  async function y() {
    if (!e.get(r)) {
      e.set(r, !0);
      try {
        await t.onfinish({ ...e.snapshot(e.get(o)), onboarded: !0 });
      } finally {
        e.set(r, !1);
      }
    }
  }
  var g = Va(), k = e.child(g), M = e.child(k), n = e.child(M);
  e.each(n, 21, () => Array(l), e.index, (L, B, U) => {
    var F = La();
    let G;
    e.template_effect(() => G = e.set_class(F, 1, "tick svelte-15y04s2", null, G, { done: U + 1 < e.get(i), cur: U + 1 === e.get(i) })), e.append(L, F);
  }), e.reset(n);
  var u = e.sibling(n, 2), x = e.only_child(u), m = e.sibling(u, 2);
  {
    var S = (L) => {
      var B = Oa();
      e.delegated("click", B, () => {
        var U;
        return (U = t.onskip) == null ? void 0 : U.call(t);
      }), e.append(L, B);
    };
    e.if(m, (L) => {
      t.onskip && L(S);
    });
  }
  e.reset(M);
  var I = e.sibling(M, 2);
  {
    var j = (L) => {
      var B = Ia(), U = e.child(B), F = e.only_child(U, !0), G = e.sibling(U, 4), C = e.child(G);
      e.each(C, 17, () => e.get(d), (H) => H.id, (H, A) => {
        var V = Ba();
        let Z;
        var K = e.child(V), X = e.child(K), $ = e.only_child(X, !0), ee = e.sibling(X, 2);
        {
          var le = (te) => {
            var re = Ca(), ae = e.only_child(re, !0);
            e.template_effect(() => e.set_text(ae, e.get(A).description)), e.append(te, re);
          };
          e.if(ee, (te) => {
            e.get(A).description && te(le);
          });
        }
        e.reset(K), e.reset(V), e.template_effect(() => {
          Z = e.set_class(V, 1, "swal-card-frame", null, Z, { "is-active": e.get(o).preset === e.get(A).id }), e.set_attribute(K, "aria-pressed", e.get(o).preset === e.get(A).id), e.set_text($, e.get(A).label);
        }), e.delegated("click", K, () => _(e.get(A).id)), e.append(H, V);
      });
      var R = e.sibling(C, 2), D = e.only_child(R);
      e.reset(G), e.reset(B), e.template_effect(() => e.set_text(F, s())), e.delegated("click", D, z), e.append(L, B);
    }, q = (L) => {
      var B = Na(), U = e.sibling(e.child(B), 4);
      ke(U, {
        get schema() {
          return t.schema;
        },
        get value() {
          return e.get(o);
        },
        onchange: w,
        sections: ["modules"]
      }), e.reset(B), e.append(L, B);
    }, O = (L) => {
      var B = Ra(), U = e.sibling(e.child(B), 4);
      ke(U, {
        get schema() {
          return t.schema;
        },
        get value() {
          return e.get(o);
        },
        onchange: w,
        sections: ["panels"]
      }), e.reset(B), e.append(L, B);
    }, E = (L) => {
      var B = Da(), U = e.sibling(e.child(B), 4), F = e.child(U), G = e.child(F), C = e.child(G), R = e.only_child(C, !0), D = e.sibling(C), H = e.only_child(D);
      e.reset(G), e.reset(F);
      var A = e.sibling(F, 2), V = e.child(A), Z = e.child(V), K = e.only_child(Z, !0), X = e.sibling(Z), $ = e.only_child(X);
      e.reset(V), e.reset(A), e.reset(U), e.reset(B), e.template_effect(() => {
        e.set_text(R, e.get(v)), e.set_text(H, `de ${e.get(p) ?? ""} módulos activos`), e.set_text(K, e.get(h)), e.set_text($, `de ${e.get(f) ?? ""} paneles activos`);
      }), e.append(L, B);
    };
    e.if(I, (L) => {
      e.get(i) === 1 ? L(j) : e.get(i) === 2 ? L(q, 1) : e.get(i) === 3 ? L(O, 2) : L(E, -1);
    });
  }
  var c = e.sibling(I, 2), b = e.child(c), T = e.sibling(b, 2);
  {
    var N = (L) => {
      var B = Pa();
      e.delegated("click", B, () => e.set(i, e.get(i) + 1)), e.append(L, B);
    }, P = (L) => {
      var B = Ha();
      e.template_effect(() => B.disabled = e.get(r)), e.delegated("click", B, y), e.append(L, B);
    };
    e.if(T, (L) => {
      e.get(i) < l ? L(N) : L(P, -1);
    });
  }
  e.reset(c), e.reset(k), e.reset(g), e.template_effect(() => {
    e.set_text(x, `Paso ${e.get(i) ?? ""} / 4`), b.disabled = e.get(i) === 1;
  }), e.delegated("click", b, () => e.set(i, e.get(i) - 1)), e.append(a, g), e.pop();
}
e.delegate(["click"]);
function _e() {
  return typeof window > "u" || !window.swalTheme ? "light" : window.swalTheme.get();
}
function Ua(a) {
  typeof window < "u" && window.swalTheme && window.swalTheme.set(a);
}
var Fa = e.from_html('<button type="button"><span class="theme-icon svelte-7zkey" aria-hidden="true"> </span> <span class="theme-label swal-kicker svelte-7zkey"> </span></button>'), Ka = e.from_html('<div class="theme-mode-switch swal-chamfer-sm svelte-7zkey" data-testid="theme-mode-switch" role="group" aria-label="Selector de Tema"></div>');
function er(a, t) {
  e.push(t, !0);
  const s = [
    { mode: "light", label: "Claro", icon: "☀️" },
    { mode: "dark", label: "Oscuro", icon: "🌙" },
    { mode: "system", label: "Sistema", icon: "💻" }
  ];
  let l = e.state("light");
  e.user_effect(() => {
    e.set(l, _e(), !0);
    const o = (d) => {
      var p;
      const v = (
        /** @type {CustomEvent} */
        (p = d.detail) == null ? void 0 : p.mode
      );
      e.set(l, v ?? _e(), !0);
    };
    return document.addEventListener("swal:themechange", o), () => document.removeEventListener("swal:themechange", o);
  });
  function i(o) {
    Ua(o), e.set(l, _e(), !0);
  }
  var r = Ka();
  e.each(r, 21, () => s, (o) => o.mode, (o, d) => {
    var v = Fa();
    let p;
    var h = e.child(v), f = e.only_child(h, !0), _ = e.sibling(h, 2), z = e.only_child(_, !0);
    e.reset(v), e.template_effect(() => {
      p = e.set_class(v, 1, "theme-btn svelte-7zkey", null, p, { active: e.get(l) === e.get(d).mode }), e.set_attribute(v, "data-testid", `theme-btn-${e.get(d).mode ?? ""}`), e.set_attribute(v, "data-mode", e.get(d).mode), e.set_attribute(v, "aria-pressed", e.get(l) === e.get(d).mode), e.set_attribute(v, "title", e.get(d).label), e.set_text(f, e.get(d).icon), e.set_text(z, e.get(d).label);
    }), e.delegated("click", v, () => i(e.get(d).mode)), e.append(o, v);
  }), e.reset(r), e.append(a, r), e.pop();
}
e.delegate(["click"]);
const ge = {
  home: [
    "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  ],
  table: ["M3 8h18", "M5 8v12", "M19 8v12", "M5 14h14", "M8 4h8"],
  clipboard: [
    "M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",
    "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    "M12 11h4",
    "M12 16h4",
    "M8 11h.01",
    "M8 16h.01"
  ],
  chef: [
    "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
    "M6 17h12"
  ],
  package: [
    "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    "M12 22V12",
    "m3.3 7 8.7 5 8.7-5",
    "m7.5 4.27 9 5.15"
  ],
  utensils: [
    "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
    "M7 2v20",
    "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
  ],
  book: [
    "M12 7v14",
    "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
  ],
  receipt: [
    "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
    "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
    "M12 17.5v-11"
  ],
  device: ["M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", "M12 18h.01"],
  wifi: [
    "M12 20h.01",
    "M2 8.82a15 15 0 0 1 20 0",
    "M5 12.859a10 10 0 0 1 14 0",
    "M8.5 16.429a5 5 0 0 1 7 0"
  ],
  qr: [
    "M4 3h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
    "M17 3h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
    "M4 16h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z",
    "M21 16h-3a2 2 0 0 0-2 2v3",
    "M21 21v.01",
    "M12 7v3a2 2 0 0 1-2 2H7",
    "M3 12h.01",
    "M12 3h.01",
    "M12 16v.01",
    "M16 12h1",
    "M21 12v.01",
    "M12 21v-1"
  ],
  login: ["M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", "m10 17 5-5-5-5", "M15 12H3"],
  menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
  close: ["M18 6 6 18", "m6 6 12 12"],
  user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  heart: [
    "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  ],
  activity: [
    "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
  ],
  calendar: [
    "M8 2v4",
    "M16 2v4",
    "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    "M3 10h18"
  ],
  chart: ["M3 3v16a2 2 0 0 0 2 2h16", "M18 17V9", "M13 17V5", "M8 17v-3"],
  sliders: [
    "M4 21v-7",
    "M4 10V3",
    "M12 21v-9",
    "M12 8V3",
    "M20 21v-5",
    "M20 12V3",
    "M2 14h4",
    "M10 8h4",
    "M18 16h4"
  ],
  check: ["M20 6 9 17l-5-5"]
};
function tr(a) {
  for (const [t, s] of Object.entries(a)) {
    if (!Array.isArray(s) || s.some((l) => typeof l != "string"))
      throw new TypeError(`registerIcons: "${t}" debe ser un array de strings (atributo d de <path>)`);
    ge[t] = s;
  }
}
function Wa(a) {
  return Object.prototype.hasOwnProperty.call(ge, a) ? ge[a] : void 0;
}
var Ga = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "name",
  "paths",
  "size",
  "strokeWidth",
  "label"
]), Ja = e.from_svg("<path></path>"), Ya = e.from_svg("<svg></svg>");
function pe(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "name", 3, ""), l = e.prop(t, "paths", 3, void 0), i = e.prop(t, "size", 3, 20), r = e.prop(t, "strokeWidth", 3, 1.75), o = e.prop(t, "label", 3, void 0), d = e.rest_props(t, Ga), v = e.derived(() => l() ?? Wa(s()) ?? []);
  var p = Ya();
  e.attribute_effect(
    p,
    () => ({
      class: "swal-icon",
      width: i(),
      height: i(),
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": r(),
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      role: o() ? "img" : void 0,
      "aria-label": o(),
      "aria-hidden": o() ? void 0 : "true",
      focusable: "false",
      ...d
    }),
    void 0,
    void 0,
    void 0,
    "svelte-13so817"
  ), e.each(p, 20, () => e.get(v), (h) => h, (h, f) => {
    var _ = Ja();
    e.template_effect(() => e.set_attribute(_, "d", f)), e.append(h, _);
  }), e.reset(p), e.append(a, p), e.pop();
}
function je(a, t = "/") {
  const s = a.href;
  return s === "/" || a.exact ? t === s : t === s || t.startsWith(s.endsWith("/") ? s : s + "/");
}
function Qa(a, t = "/") {
  let s;
  for (const l of a)
    je(l, t) && (!s || l.href.length > s.href.length) && (s = l);
  return s;
}
var Za = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "items",
  "currentPath",
  "open",
  "menuLabel",
  "navLabel",
  "id",
  "lead",
  "onnavigate"
]), Xa = e.from_html('<span class="nav-lead svelte-v4r81b"><!></span>'), $a = e.from_html('<span class="nav-current svelte-v4r81b"><!> </span>'), es = e.from_html("<a><!> </a>"), ts = e.from_html('<div><div><!> <button type="button" class="nav-toggle svelte-v4r81b"><span class="when-closed svelte-v4r81b"><!></span> <span class="when-open svelte-v4r81b"><!></span> </button></div> <nav class="nav svelte-v4r81b"></nav></div>');
function as(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "items", 19, () => []), l = e.prop(t, "currentPath", 3, "/"), i = e.prop(t, "open", 15, !1), r = e.prop(t, "menuLabel", 3, "Menu"), o = e.prop(t, "navLabel", 3, "Principal"), d = e.prop(t, "id", 3, "swal-nav"), v = e.rest_props(t, Za), p = e.state(void 0);
  ve(() => {
    document.documentElement.classList.add("js");
  });
  let h = e.derived(() => Qa(s(), l()));
  function f(q) {
    var O;
    q.key === "Escape" && i() && (i(!1), (O = e.get(p)) == null || O.focus());
  }
  function _(q) {
    var O;
    i(!1), (O = t.onnavigate) == null || O.call(t, q);
  }
  var z = ts();
  e.event("keydown", e.window, f), e.attribute_effect(
    z,
    () => ({
      class: "swal-mobile-nav",
      "data-nav": i() ? "open" : "closed",
      ...v
    }),
    void 0,
    void 0,
    void 0,
    "svelte-v4r81b"
  );
  var w = e.child(z);
  let y;
  var g = e.child(w);
  {
    var k = (q) => {
      var O = Xa(), E = e.child(O);
      e.snippet(E, () => t.lead), e.reset(O), e.append(q, O);
    }, M = (q) => {
      var O = $a(), E = e.child(O);
      {
        let b = e.derived(() => {
          var T;
          return ((T = e.get(h)) == null ? void 0 : T.icon) ?? "home";
        });
        pe(E, {
          get name() {
            return e.get(b);
          },
          size: 18
        });
      }
      var c = e.sibling(E);
      e.reset(O), e.template_effect(() => {
        var b;
        return e.set_text(c, ` ${((b = e.get(h)) == null ? void 0 : b.label) ?? "" ?? ""}`);
      }), e.append(q, O);
    };
    e.if(g, (q) => {
      t.lead ? q(k) : q(M, -1);
    });
  }
  var n = e.sibling(g, 2), u = e.child(n), x = e.child(u);
  pe(x, { name: "menu", size: 20 }), e.reset(u);
  var m = e.sibling(u, 2), S = e.child(m);
  pe(S, { name: "close", size: 20 }), e.reset(m);
  var I = e.sibling(m);
  e.reset(n), e.bind_this(n, (q) => e.set(p, q), () => e.get(p)), e.reset(w);
  var j = e.sibling(w, 2);
  e.each(j, 21, s, (q) => q.href, (q, O) => {
    const E = e.derived(() => je(e.get(O), l()));
    var c = es();
    let b;
    var T = e.child(c);
    {
      var N = (L) => {
        pe(L, {
          get name() {
            return e.get(O).icon;
          },
          size: 18
        });
      };
      e.if(T, (L) => {
        e.get(O).icon && L(N);
      });
    }
    var P = e.sibling(T);
    e.reset(c), e.template_effect(() => {
      e.set_attribute(c, "href", e.get(O).href), b = e.set_class(c, 1, "nav-item svelte-v4r81b", null, b, { active: e.get(E) }), e.set_attribute(c, "aria-current", e.get(E) ? "page" : void 0), e.set_text(P, ` ${e.get(O).label ?? ""}`);
    }), e.delegated("click", c, () => _(e.get(O))), e.append(q, c);
  }), e.reset(j), e.reset(z), e.template_effect(() => {
    y = e.set_class(w, 1, "nav-bar svelte-v4r81b", null, y, { "has-lead": !!t.lead }), e.set_attribute(n, "aria-controls", d()), e.set_attribute(n, "aria-expanded", i()), e.set_text(I, ` ${r() ?? ""}`), e.set_attribute(j, "id", d()), e.set_attribute(j, "aria-label", o());
  }), e.delegated("click", n, () => i(!i())), e.append(a, z), e.pop();
}
e.delegate(["click"]);
var ss = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "items",
  "currentPath",
  "showNav",
  "menuOpen",
  "menuLabel",
  "navLabel",
  "brand",
  "navFooter",
  "topbar",
  "children"
]), rs = e.from_html('<div class="sidebar-footer svelte-1duc7gd"><!></div>'), ls = e.from_html('<aside class="sidebar svelte-1duc7gd"><!> <!></aside>'), is = e.from_html('<header class="topbar svelte-1duc7gd"><!></header>'), ns = e.from_html('<div><!> <div class="main-area svelte-1duc7gd"><!> <main class="main-content svelte-1duc7gd"><!></main></div></div>');
function ar(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "items", 19, () => []), l = e.prop(t, "currentPath", 3, "/"), i = e.prop(t, "showNav", 3, !0), r = e.prop(t, "menuOpen", 15, !1), o = e.prop(t, "menuLabel", 3, "Menu"), d = e.prop(t, "navLabel", 3, "Principal"), v = e.rest_props(t, ss);
  var p = ns();
  e.attribute_effect(p, () => ({ class: "swal-app-shell", ...v }), void 0, void 0, void 0, "svelte-1duc7gd");
  var h = e.child(p);
  {
    var f = (k) => {
      var M = ls(), n = e.child(M);
      as(n, {
        get items() {
          return s();
        },
        get currentPath() {
          return l();
        },
        get menuLabel() {
          return o();
        },
        get navLabel() {
          return d();
        },
        get lead() {
          return t.brand;
        },
        get open() {
          return r();
        },
        set open(m) {
          r(m);
        }
      });
      var u = e.sibling(n, 2);
      {
        var x = (m) => {
          var S = rs(), I = e.child(S);
          e.snippet(I, () => t.navFooter), e.reset(S), e.append(m, S);
        };
        e.if(u, (m) => {
          t.navFooter && m(x);
        });
      }
      e.reset(M), e.append(k, M);
    };
    e.if(h, (k) => {
      i() && k(f);
    });
  }
  var _ = e.sibling(h, 2), z = e.child(_);
  {
    var w = (k) => {
      var M = is(), n = e.child(M);
      e.snippet(n, () => t.topbar), e.reset(M), e.append(k, M);
    };
    e.if(z, (k) => {
      t.topbar && k(w);
    });
  }
  var y = e.sibling(z, 2), g = e.child(y);
  e.snippet(g, () => t.children ?? e.noop), e.reset(y), e.reset(_), e.reset(p), e.append(a, p), e.pop();
}
const qe = "swal-theme", os = "swal-font", ds = ["light", "dark"];
function cs(a = {}) {
  const t = a.themeKey ?? qe, s = a.fontKey ?? os, l = a.themes ?? ds;
  return `(function(){try{var d=document.documentElement;d.classList.add("js");var t=localStorage.getItem(${JSON.stringify(t)});if(${JSON.stringify(l)}.indexOf(t)>-1)d.setAttribute("data-theme",t);var f=localStorage.getItem(${JSON.stringify(s)});if(f&&/^[a-z0-9-]+$/i.test(f))d.setAttribute("data-font",f);}catch(e){/* localStorage bloqueado: se sigue al sistema */}})();`;
}
const sr = cs();
function rr(a, t = {}) {
  const s = t.themeKey ?? qe, l = document.documentElement;
  try {
    a === "system" ? (l.removeAttribute("data-theme"), localStorage.removeItem(s)) : (l.setAttribute("data-theme", a), localStorage.setItem(s, a));
  } catch {
  }
}
function Ae() {
  return typeof navigator < "u" && navigator.storage ? navigator.storage : null;
}
async function vs() {
  const a = Ae();
  if (!a || typeof a.persist != "function") return "unsupported";
  try {
    return await a.persist() ? "granted" : "denied";
  } catch {
    return "denied";
  }
}
async function us() {
  const a = Ae();
  let t = !1, s = 0, l = 0;
  if (a) {
    try {
      typeof a.persisted == "function" && (t = !!await a.persisted());
    } catch {
    }
    try {
      if (typeof a.estimate == "function") {
        const r = await a.estimate() || {};
        s = r.usage || 0, l = r.quota || 0;
      }
    } catch {
    }
  }
  const i = l > 0 ? Math.min(s / l, 1) : 0;
  return { persisted: t, usageBytes: s, quotaBytes: l, ratio: i };
}
function lr(a) {
  if (!a || typeof a != "object") return !1;
  const t = a.name || "";
  return t === "QuotaExceededError" || t === "NS_ERROR_DOM_QUOTA_REACHED" || a.code === 22 || a.code === 1014;
}
function Me(a, t = 1) {
  if (!Number.isFinite(a) || a <= 0) return "0 B";
  const s = ["B", "KB", "MB", "GB", "TB"], l = Math.min(Math.floor(Math.log(a) / Math.log(1024)), s.length - 1), i = a / Math.pow(1024, l);
  return `${l === 0 ? i : i.toFixed(t)} ${s[l]}`;
}
var fs = e.from_html('<button type="button" class="btn svelte-1oks9rr"> </button>'), ps = e.from_html('<p class="warn svelte-1oks9rr" role="alert"> </p>'), hs = e.from_html('<div class="swal-storage-status svelte-1oks9rr"><div class="row svelte-1oks9rr"><span> </span> <!></div> <div role="progressbar" aria-valuemin="0" aria-valuemax="100"><span class="fill svelte-1oks9rr"></span></div> <p class="meta svelte-1oks9rr"> </p> <!></div>');
function ir(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "warnAt", 3, 0.8), l = e.prop(t, "labels", 19, () => ({}));
  const i = e.derived(() => ({
    persisted: "Datos protegidos",
    notPersisted: "Datos sin proteger",
    request: "Proteger datos",
    usage: "Uso",
    warning: "Almacenamiento casi lleno. Exporta un respaldo y libera espacio.",
    granted: "El navegador no borrara tus datos automaticamente.",
    denied: "El navegador rechazo la proteccion. Exporta respaldos con frecuencia.",
    unsupported: "Este navegador no soporta almacenamiento persistente.",
    ...l()
  }));
  let r = e.state(e.proxy({ persisted: !1, usageBytes: 0, quotaBytes: 0, ratio: 0 })), o = e.state(!1);
  const d = e.derived(() => Math.round(e.get(r).ratio * 100)), v = e.derived(() => e.get(r).ratio > s());
  async function p() {
    e.set(r, await us(), !0);
  }
  async function h() {
    e.set(o, !0);
    try {
      const j = await vs();
      j === "granted" ? se.success(e.get(i).granted) : j === "denied" ? se.warning(e.get(i).denied) : se.info(e.get(i).unsupported), await p();
    } finally {
      e.set(o, !1);
    }
  }
  ve(p);
  var f = hs(), _ = e.child(f), z = e.child(_);
  let w;
  var y = e.only_child(z, !0), g = e.sibling(z, 2);
  {
    var k = (j) => {
      var q = fs(), O = e.only_child(q, !0);
      e.template_effect(() => {
        q.disabled = e.get(o), e.set_text(O, e.get(i).request);
      }), e.delegated("click", q, h), e.append(j, q);
    };
    e.if(g, (j) => {
      e.get(r).persisted || j(k);
    });
  }
  e.reset(_);
  var M = e.sibling(_, 2);
  let n;
  var u = e.only_child(M), x = e.sibling(M, 2), m = e.only_child(x), S = e.sibling(x, 2);
  {
    var I = (j) => {
      var q = ps(), O = e.only_child(q, !0);
      e.template_effect(() => e.set_text(O, e.get(i).warning)), e.append(j, q);
    };
    e.if(S, (j) => {
      e.get(v) && j(I);
    });
  }
  e.reset(f), e.template_effect(
    (j, q) => {
      w = e.set_class(z, 1, "badge svelte-1oks9rr", null, w, { ok: e.get(r).persisted }), e.set_attribute(z, "data-persisted", e.get(r).persisted), e.set_text(y, e.get(r).persisted ? e.get(i).persisted : e.get(i).notPersisted), n = e.set_class(M, 1, "bar svelte-1oks9rr", null, n, { high: e.get(v) }), e.set_attribute(M, "aria-label", e.get(i).usage), e.set_attribute(M, "aria-valuenow", e.get(d)), e.set_style(u, `width: ${e.get(d) ?? ""}%`), e.set_text(m, `${e.get(i).usage ?? ""}: ${j ?? ""} / ${q ?? ""} (${e.get(d) ?? ""}%)`);
    },
    [
      () => Me(e.get(r).usageBytes),
      () => Me(e.get(r).quotaBytes)
    ]
  ), e.append(a, f), e.pop();
}
e.delegate(["click"]);
const Le = "swal-backup/v1", _s = 50 * 1024 * 1024;
async function gs({ appId: a, schemaVersion: t = 1, collect: s }) {
  if (!a) throw new Error("createBackup: appId requerido");
  if (typeof s != "function") throw new Error("createBackup: collect requerido");
  const l = await s();
  if (!l || typeof l != "object" || Array.isArray(l))
    throw new Error("createBackup: collect debe devolver { nombre: [...] }");
  return {
    format: Le,
    appId: a,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    schemaVersion: t,
    stores: l
  };
}
function ms(a, t) {
  const s = t || `${a.appId}-backup-${String(a.createdAt).slice(0, 10)}.json`, l = new Blob([JSON.stringify(a)], { type: "application/json" }), i = URL.createObjectURL(l), r = document.createElement("a");
  return r.href = i, r.download = s, document.body.appendChild(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(i), 0), s;
}
function Oe(a, { appId: t } = {}) {
  if (!a || typeof a != "object" || a.format !== Le)
    throw new Error("Archivo de respaldo no valido (formato desconocido)");
  if (typeof a.appId != "string" || !a.appId)
    throw new Error("Respaldo invalido: falta appId");
  if (t && a.appId !== t)
    throw new Error(`El respaldo pertenece a otra app (${a.appId}, se esperaba ${t})`);
  if (!a.stores || typeof a.stores != "object" || Array.isArray(a.stores))
    throw new Error("Respaldo invalido: falta stores");
  for (const [s, l] of Object.entries(a.stores))
    if (!Array.isArray(l)) throw new Error(`Respaldo invalido: el store "${s}" no es una lista`);
  return a;
}
async function bs(a, { appId: t, maxBytes: s = _s } = {}) {
  if (!a) throw new Error("No se selecciono ningun archivo");
  if (a.size > s)
    throw new Error(`El archivo excede el limite de ${Math.round(s / 1024 / 1024)} MB`);
  let l;
  try {
    l = JSON.parse(await a.text());
  } catch {
    throw new Error("El archivo no es JSON valido");
  }
  return Oe(l, { appId: t });
}
function ys(a) {
  return Object.fromEntries(Object.entries(a.stores).map(([t, s]) => [t, s.length]));
}
async function xs(a, { apply: t, onConflict: s = "replace" } = (
  /** @type {any} */
  {}
)) {
  if (Oe(a), typeof t != "function") throw new Error("restoreBackup: apply requerido");
  if (s !== "replace" && s !== "merge")
    throw new Error('restoreBackup: onConflict debe ser "replace" o "merge"');
  const l = {};
  for (const [i, r] of Object.entries(a.stores))
    await t(i, r, s), l[i] = r.length;
  return l;
}
var ws = e.from_html("<li> </li>"), ks = e.from_html('<div class="overlay svelte-1fo8af4"><div class="dialog svelte-1fo8af4" role="dialog" aria-modal="true"><h4 class="svelte-1fo8af4"> </h4> <p class="svelte-1fo8af4"> </p> <ul class="svelte-1fo8af4"></ul> <div class="actions svelte-1fo8af4"><button type="button" class="btn svelte-1fo8af4" data-action="cancel"> </button> <button type="button" class="btn primary svelte-1fo8af4" data-action="confirm"> </button></div></div></div>'), Ms = e.from_html('<div class="swal-backup-panel svelte-1fo8af4"><h3 class="svelte-1fo8af4"> </h3> <div class="actions svelte-1fo8af4"><button type="button" class="btn primary svelte-1fo8af4" data-action="export"> </button> <button type="button" class="btn svelte-1fo8af4" data-action="import"> </button> <input class="file svelte-1fo8af4" type="file" accept="application/json,.json"/></div> <div role="group"> </div> <!></div>');
function nr(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "schemaVersion", 3, 1), l = e.prop(t, "onConflict", 3, "replace"), i = e.prop(t, "labels", 19, () => ({}));
  const r = e.derived(() => ({
    title: "Respaldo de datos",
    export: "Exportar respaldo",
    import: "Importar respaldo",
    drop: "o arrastra aqui un archivo de respaldo (.json)",
    confirmTitle: "Restaurar respaldo",
    confirmText: "Se restauraran estos datos. Esta accion puede reemplazar los datos actuales.",
    confirm: "Restaurar",
    cancel: "Cancelar",
    exported: "Respaldo exportado",
    restored: "Datos restaurados",
    ...i()
  }));
  let o = e.state(null), d = e.state(!1), v = e.state(!1), p = e.state(void 0);
  const h = e.derived(() => e.get(o) ? Object.entries(ys(e.get(o))) : []);
  async function f() {
    e.set(d, !0);
    try {
      const b = await gs({
        appId: t.appId,
        schemaVersion: s(),
        collect: t.collect
      }), T = ms(b, t.filename);
      se.success(`${e.get(r).exported}: ${T}`);
    } catch (b) {
      se.error((b == null ? void 0 : b.message) || String(b));
    } finally {
      e.set(d, !1);
    }
  }
  async function _(b) {
    if (b)
      try {
        e.set(o, await bs(b, { appId: t.appId, maxBytes: t.maxBytes }), !0);
      } catch (T) {
        e.set(o, null), se.error((T == null ? void 0 : T.message) || String(T));
      }
  }
  function z(b) {
    var N;
    const T = (N = b.currentTarget.files) == null ? void 0 : N[0];
    _(T), b.currentTarget.value = "";
  }
  function w(b) {
    var T, N;
    b.preventDefault(), e.set(v, !1), _((N = (T = b.dataTransfer) == null ? void 0 : T.files) == null ? void 0 : N[0]);
  }
  async function y() {
    var T;
    const b = e.get(o);
    e.set(d, !0);
    try {
      const N = await xs(b, { apply: t.apply, onConflict: l() });
      e.set(o, null), se.success(e.get(r).restored), (T = t.onRestored) == null || T.call(t, N);
    } catch (N) {
      se.error((N == null ? void 0 : N.message) || String(N));
    } finally {
      e.set(d, !1);
    }
  }
  var g = Ms(), k = e.child(g), M = e.only_child(k, !0), n = e.sibling(k, 2), u = e.child(n), x = e.only_child(u, !0), m = e.sibling(u, 2), S = e.only_child(m, !0), I = e.sibling(m, 2);
  e.bind_this(I, (b) => e.set(p, b), () => e.get(p)), e.reset(n);
  var j = e.sibling(n, 2);
  let q;
  var O = e.only_child(j, !0), E = e.sibling(j, 2);
  {
    var c = (b) => {
      var T = ks(), N = e.child(T), P = e.child(N), L = e.only_child(P, !0), B = e.sibling(P, 2), U = e.only_child(B, !0), F = e.sibling(B, 2);
      e.each(F, 21, () => e.get(h), ([A, V]) => A, (A, V) => {
        var Z = e.derived(() => e.to_array(e.get(V), 2));
        let K = () => e.get(Z)[0], X = () => e.get(Z)[1];
        var $ = ws(), ee = e.only_child($);
        e.template_effect(() => {
          e.set_attribute($, "data-store", K()), e.set_text(ee, `${K() ?? ""}: ${X() ?? ""}`);
        }), e.append(A, $);
      }), e.reset(F);
      var G = e.sibling(F, 2), C = e.child(G), R = e.only_child(C, !0), D = e.sibling(C, 2), H = e.only_child(D, !0);
      e.reset(G), e.reset(N), e.reset(T), e.template_effect(() => {
        e.set_attribute(N, "aria-label", e.get(r).confirmTitle), e.set_text(L, e.get(r).confirmTitle), e.set_text(U, e.get(r).confirmText), C.disabled = e.get(d), e.set_text(R, e.get(r).cancel), D.disabled = e.get(d), e.set_text(H, e.get(r).confirm);
      }), e.delegated("click", C, () => e.set(o, null)), e.delegated("click", D, y), e.append(b, T);
    };
    e.if(E, (b) => {
      e.get(o) && b(c);
    });
  }
  e.reset(g), e.template_effect(() => {
    e.set_text(M, e.get(r).title), u.disabled = e.get(d), e.set_text(x, e.get(r).export), m.disabled = e.get(d), e.set_text(S, e.get(r).import), e.set_attribute(I, "aria-label", e.get(r).import), q = e.set_class(j, 1, "drop svelte-1fo8af4", null, q, { dragging: e.get(v) }), e.set_attribute(j, "aria-label", e.get(r).drop), e.set_text(O, e.get(r).drop);
  }), e.delegated("click", u, f), e.delegated("click", m, () => {
    var b;
    return (b = e.get(p)) == null ? void 0 : b.click();
  }), e.delegated("change", I, z), e.event("dragover", j, (b) => {
    b.preventDefault(), e.set(v, !0);
  }), e.event("dragleave", j, () => e.set(v, !1)), e.event("drop", j, w), e.append(a, g), e.pop();
}
e.delegate(["click", "change"]);
var Ss = e.from_html('<div class="swal-offline svelte-1ck2es9" data-testid="swal-offline"><span class="offline-dot svelte-1ck2es9" aria-hidden="true"></span> <p class="offline-text svelte-1ck2es9"> </p> <button type="button" class="offline-dismiss svelte-1ck2es9">✕</button></div>'), zs = e.from_html('<div class="swal-offline-region" role="status" aria-live="polite"><!></div>');
function or(a, t) {
  e.push(t, !0);
  let s = e.prop(t, "message", 3, "You are offline. Changes are saved on this device and will sync when you reconnect."), l = e.prop(t, "dismissLabel", 3, "Dismiss offline notice"), i = e.state(!0), r = e.state(!1);
  function o() {
    e.set(i, !1), e.set(r, !1);
  }
  function d() {
    e.set(i, !0);
  }
  function v() {
    var _;
    e.set(r, !0), (_ = t.ondismiss) == null || _.call(t);
  }
  ve(() => {
    if (typeof navigator < "u" && "onLine" in navigator && e.set(i, navigator.onLine, !0), !(typeof window > "u"))
      return window.addEventListener("offline", o), window.addEventListener("online", d), () => {
        window.removeEventListener("offline", o), window.removeEventListener("online", d);
      };
  });
  var p = zs(), h = e.child(p);
  {
    var f = (_) => {
      var z = Ss(), w = e.sibling(e.child(z), 2), y = e.only_child(w, !0), g = e.sibling(w, 2);
      e.reset(z), e.template_effect(() => {
        e.set_text(y, s()), e.set_attribute(g, "aria-label", l());
      }), e.delegated("click", g, v), e.append(_, z);
    };
    e.if(h, (_) => {
      !e.get(i) && !e.get(r) && _(f);
    });
  }
  e.reset(p), e.append(a, p), e.pop();
}
e.delegate(["click"]);
var Es = e.from_html('<p class="install-text svelte-1u911k1"> </p>'), Ts = e.from_html('<div class="swal-install svelte-1u911k1" role="dialog" data-testid="swal-install"><div class="install-body svelte-1u911k1"><strong class="install-title svelte-1u911k1"> </strong> <!></div> <div class="install-actions svelte-1u911k1"><button type="button" class="btn ghost svelte-1u911k1"> </button> <button type="button" class="btn primary svelte-1u911k1"> </button></div></div>');
function dr(a, t) {
  e.push(t, !0);
  const s = ["swal", "pwa", "install", "dismissed"].join("-");
  let l = e.prop(t, "storageKey", 3, s), i = e.prop(t, "title", 3, "Install this app"), r = e.prop(t, "description", 3, "Add it to your home screen for fast offline access."), o = e.prop(t, "installText", 3, "Install"), d = e.prop(t, "dismissText", 3, "Not now"), v = e.prop(t, "eventName", 3, "swal:pwa-installed"), p = e.state(null), h = e.state(!1);
  function f() {
    try {
      return localStorage.getItem(l()) !== null;
    } catch {
      return !1;
    }
  }
  function _(n) {
    n.preventDefault(), !f() && (e.set(p, n, !0), e.set(h, !0));
  }
  function z() {
    e.set(p, null), e.set(h, !1);
  }
  async function w() {
    var x;
    if (!e.get(p)) return;
    const n = e.get(p);
    e.set(p, null), await n.prompt();
    const u = await n.userChoice;
    (u == null ? void 0 : u.outcome) === "accepted" ? (e.set(h, !1), (x = t.oninstall) == null || x.call(t), typeof window < "u" && window.dispatchEvent(new CustomEvent(v(), { detail: { outcome: "accepted" } }))) : e.set(p, n, !0);
  }
  function y() {
    var n;
    try {
      localStorage.setItem(l(), (/* @__PURE__ */ new Date()).toISOString());
    } catch {
    }
    e.set(p, null), e.set(h, !1), (n = t.ondismiss) == null || n.call(t);
  }
  ve(() => {
    if (!(typeof window > "u"))
      return window.addEventListener("beforeinstallprompt", _), window.addEventListener("appinstalled", z), () => {
        window.removeEventListener("beforeinstallprompt", _), window.removeEventListener("appinstalled", z);
      };
  });
  var g = e.comment(), k = e.first_child(g);
  {
    var M = (n) => {
      var u = Ts(), x = e.child(u), m = e.child(x), S = e.only_child(m, !0), I = e.sibling(m, 2);
      {
        var j = (T) => {
          var N = Es(), P = e.only_child(N, !0);
          e.template_effect(() => e.set_text(P, r())), e.append(T, N);
        };
        e.if(I, (T) => {
          r() && T(j);
        });
      }
      e.reset(x);
      var q = e.sibling(x, 2), O = e.child(q), E = e.only_child(O, !0), c = e.sibling(O, 2), b = e.only_child(c, !0);
      e.reset(q), e.reset(u), e.template_effect(() => {
        e.set_attribute(u, "aria-label", i()), e.set_text(S, i()), e.set_text(E, d()), e.set_text(b, o());
      }), e.delegated("click", O, y), e.delegated("click", c, w), e.append(n, u);
    };
    e.if(k, (n) => {
      e.get(h) && n(M);
    });
  }
  e.append(a, g), e.pop();
}
e.delegate(["click"]);
var js = e.from_html('<p class="consent-text svelte-frsc0w"> </p>'), qs = e.from_html('<a class="consent-policy svelte-frsc0w"> </a>'), As = e.from_html('<div class="swal-consent svelte-frsc0w" role="region" data-testid="swal-consent"><div class="consent-body svelte-frsc0w"><strong class="consent-title svelte-frsc0w"> </strong> <!> <!></div> <div class="consent-actions svelte-frsc0w"><button type="button" class="btn ghost svelte-frsc0w"> </button> <button type="button" class="btn primary svelte-frsc0w"> </button></div></div>');
function cr(a, t) {
  e.push(t, !0);
  const s = ["swal", "consent", "v1"].join("-");
  let l = e.prop(t, "storageKey", 3, s), i = e.prop(t, "title", 3, "Cookies & privacy"), r = e.prop(t, "description", 3, ""), o = e.prop(t, "acceptText", 3, "Accept"), d = e.prop(t, "rejectText", 3, "Reject"), v = e.prop(t, "policyHref", 3, ""), p = e.prop(t, "policyText", 3, ""), h = e.prop(t, "eventName", 3, "swal:consent"), f = e.state(!1);
  ve(() => {
    try {
      localStorage.getItem(l()) === null && e.set(f, !0);
    } catch {
      e.set(f, !0);
    }
  });
  function _(g) {
    var k;
    try {
      localStorage.setItem(l(), g ? "accepted" : "rejected"), localStorage.setItem(`${l()}-date`, (/* @__PURE__ */ new Date()).toISOString());
    } catch {
    }
    e.set(f, !1), (k = t.onconsent) == null || k.call(t, g), typeof window < "u" && window.dispatchEvent(new CustomEvent(h(), { detail: { accepted: g } }));
  }
  var z = e.comment(), w = e.first_child(z);
  {
    var y = (g) => {
      var k = As(), M = e.child(k), n = e.child(M), u = e.only_child(n, !0), x = e.sibling(n, 2);
      {
        var m = (b) => {
          var T = js(), N = e.only_child(T, !0);
          e.template_effect(() => e.set_text(N, r())), e.append(b, T);
        };
        e.if(x, (b) => {
          r() && b(m);
        });
      }
      var S = e.sibling(x, 2);
      {
        var I = (b) => {
          var T = qs(), N = e.only_child(T, !0);
          e.template_effect(() => {
            e.set_attribute(T, "href", v()), e.set_text(N, p() || v());
          }), e.append(b, T);
        };
        e.if(S, (b) => {
          v() && b(I);
        });
      }
      e.reset(M);
      var j = e.sibling(M, 2), q = e.child(j), O = e.only_child(q, !0), E = e.sibling(q, 2), c = e.only_child(E, !0);
      e.reset(j), e.reset(k), e.template_effect(() => {
        e.set_attribute(k, "aria-label", i()), e.set_text(u, i()), e.set_text(O, d()), e.set_text(c, o());
      }), e.delegated("click", q, () => _(!1)), e.delegated("click", E, () => _(!0)), e.append(g, k);
    };
    e.if(w, (g) => {
      e.get(f) && g(y);
    });
  }
  e.append(a, z), e.pop();
}
e.delegate(["click"]);
export {
  ar as AppShell,
  nr as BackupPanel,
  Is as Badge,
  fe as Button,
  be as Card,
  Ks as CommandPalette,
  Js as ConfigEditor,
  cr as ConsentBanner,
  Ys as DashboardLayout,
  Qs as GlobalTicker,
  ge as ICONS,
  pe as Icon,
  Ns as Input,
  dr as InstallPrompt,
  Zs as Landing,
  Us as LoadingState,
  Gs as LogViewer,
  as as MobileNav,
  Hs as Modal,
  or as OfflineBanner,
  $s as OnboardingWizard,
  ke as PrefsEditor,
  Xs as QRCode,
  Ps as Skeleton,
  Vs as StatusBadge,
  ir as StorageStatus,
  sr as THEME_BOOT_SCRIPT,
  Rs as Table,
  Ds as Tabs,
  Fs as Terminal,
  er as ThemeModeSwitch,
  Ws as Toaster,
  gs as createBackup,
  ms as downloadBackup,
  Qa as findCurrentNav,
  Me as formatBytes,
  Wa as getIcon,
  us as getStorageStatus,
  je as isNavActive,
  lr as isQuotaError,
  bs as readBackupFile,
  tr as registerIcons,
  vs as requestPersistence,
  xs as restoreBackup,
  rr as setTheme,
  cs as themeBootScript,
  Oe as validateBackup
};
