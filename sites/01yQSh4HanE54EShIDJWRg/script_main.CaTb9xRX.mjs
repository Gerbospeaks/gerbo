import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  B as t,
  Ga as n,
  X as r,
  Z as i,
  d as a,
  init_client as o,
  init_npm_react_18_2 as s,
  init_npm_react_dom_18_2 as c,
  init_ssg_sandbox_shims as l,
  navigator as u,
  pe as d,
  r as f,
  te as p,
  ue as m,
  window as h,
  x as g,
  ye as _,
} from "./react.Cd8yx0tA.mjs";
import {
  ErrorPlaceholder as v,
  GracefullyDegradingErrorBoundary as y,
  LibraryFeaturesProvider as b,
  PageEffectsProvider as x,
  PageRoot as S,
  inferInitialRouteFromPath as C,
  init_framer_MRKGI23E as w,
  installFlexboxGapWorkaroundIfNeeded as T,
  lazy as E,
  markHydrationStart as D,
  patchRoutesForABTesting as O,
  removeHiddenBreakpointLayersV2 as k,
  turnOffReactEventHandling as A,
  useCurrentRoute as j,
  useLocaleInfo as M,
  useRouter as N,
  withPerformanceMarks as P,
  yieldToMain as F,
} from "./framer.DERDik75.mjs";
async function I({ routeId: e, pathVariables: i, localeId: a }) {
  let o = z[e].page.preload(),
    s = t(S, {
      isWebsite: !0,
      routeId: e,
      pathVariables: i,
      routes: z,
      collectionUtils: V,
      framerSiteId: H,
      notFoundPage: E(
        () =>
          import(`./czOYRu5gxzadjU_UYWSGJYRNtnO89BDT0bki961qXFI.8RUyKUxe.mjs`),
      ),
      isReducedMotion: void 0,
      localeId: a,
      locales: B,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://www.gerbospeaks.com`,
      EditorBar:
        h === void 0
          ? void 0
          : (() => {
              let e =
                /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
                  u.userAgent,
                );
              if (e) {
                console.log(
                  `[Framer Editor Bar] Unavailable because navigator is bot`,
                );
                return;
              }
              return E(async () => {
                let e = {
                  __version: 2,
                  framer: {
                    useCurrentRoute: j,
                    useLocaleInfo: M,
                    useRouter: N,
                  },
                  react: {
                    createElement: t,
                    Fragment: g,
                    memo: r,
                    useCallback: p,
                    useEffect: m,
                    useRef: d,
                    useState: _,
                  },
                  "react-dom": { createPortal: n },
                };
                h.__framer_editorBarDependencies = e;
                let { createEditorBar: i } = await import(
                  `https://framer.com/edit/init.mjs`
                );
                return { default: i() };
              });
            })(),
    }),
    c = t(b, {
      children: s,
      value: {
        cssCollector: !0,
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    l = t(y, { children: c }),
    f = t(x, {
      children: l,
      value: {
        global: {
          enter: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.2,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return await o, f;
}
function L() {
  U && h.__framer_events.push(arguments);
}
async function R(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || h.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. If you are the author of this website, please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r,
      );
    L(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let r, o, s, c;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      (r = e.routeId),
        (o = e.localeId),
        (s = e.pathVariables),
        (c = e.breakpoints),
        (r = O(z, r));
    } else {
      O(z, void 0);
      let e = C(z, decodeURIComponent(location.pathname), !0, B);
      (r = e.routeId), (o = e.localeId), (s = e.pathVariables);
    }
    let l = I({ routeId: r, localeId: o, pathVariables: s });
    h !== void 0 &&
      (async () => {
        let e = z[r],
          t = B.find(({ id: e }) => (o ? e === o : e === `default`)).code,
          n = null;
        if (e?.collectionId && V) {
          let r = await V[e.collectionId]?.(),
            [i] = Object.values(s);
          r &&
            typeof i == `string` &&
            (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let i = Intl.DateTimeFormat().resolvedOptions(),
          a = i.timeZone,
          c = i.locale;
        await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          h.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: H ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: h.location.href,
              hostname: h.location.hostname || null,
              pathname: h.location.pathname || null,
              hash: h.location.hash || null,
              search: h.location.search || null,
              timezone: a,
              locale: c,
            },
            `eager`,
          ]),
          await F({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: t || null },
            }),
          );
      })();
    let u = await l;
    if (e) {
      P(`framer-rewrite-breakpoints`, () => {
        k(c), h.__framer_onRewriteBreakpoints?.(c);
      });
      let e = i;
      e(() => {
        D(), A(), a(t, u, { onRecoverableError: n });
      });
    } else f(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var z,
  B,
  V,
  H,
  U,
  W,
  G = e(() => {
    l(),
      w(),
      s(),
      c(),
      o(),
      (z = {
        augiA20Il: {
          elements: {
            a4RRpUQLJ: `reviews`,
            a7CyFpECQ: `heading`,
            akRK8f7LT: `hero`,
            aVAbPFLLv: `industries`,
            fKKekx0mU: `pricing`,
            HFF95VKnB: `deployment`,
            hYjf36gN5: `features`,
            LeQ5TpaLd: `how-it-works`,
            Mc6VfxbD9: `integrations`,
            O2UmFEWea: `pricing-1`,
            otFsjtIkD: `footer`,
            px5h2kywq: `why-buss`,
            PYmc81V8e: `faqs`,
            QH4DHJ2U6: `cta`,
          },
          page: E(
            () =>
              import(
                `./XIiGsBGdW8oP4o4RK8UHM1t75HMs_MlyebaxsAp5aTc.B78OUZDr.mjs`
              ),
          ),
          path: `/`,
        },
        ZK2wKnzbL: {
          elements: { BYCF0rlAy: `footer`, P9giXMsVx: `header` },
          page: E(
            () =>
              import(
                `./3AChmpEwokhktDO8vgLyh1E_d2OpwiYjvZBOV8opd3I.CXPo0dDp.mjs`
              ),
          ),
          path: `/privacy`,
        },
        I7UNmcwR8: {
          elements: { diFu9uNuc: `header`, s3TBLbAss: `footer` },
          page: E(
            () =>
              import(
                `./3TC8FYzE-3sjmA2SILWUHZcYsP6IQCDg5_A4zXkQ0N4.CV0b24rs.mjs`
              ),
          ),
          path: `/terms`,
        },
        WBTam2e07: {
          elements: { VdSpjCFzn: `404-section`, XXZpX3TxP: `footer` },
          page: E(
            () =>
              import(
                `./czOYRu5gxzadjU_UYWSGJYRNtnO89BDT0bki961qXFI.8RUyKUxe.mjs`
              ),
          ),
          path: `/404`,
        },
        J986jsEGO: {
          elements: {
            BpdroLjj9: `heading`,
            BvppAfnk5: `contact`,
            k5CTvutie: `faqs`,
            uQw7mFWzT: `footer`,
            Z1Onzhrf5: `form`,
          },
          page: E(
            () =>
              import(
                `./oyG_NGFDIKeXa3uHancUpX1z7pqoI0Hsm6NImaSVBso.Cofsv57B.mjs`
              ),
          ),
          path: `/contact`,
        },
        IGP28tJuK: {
          elements: {
            BWIc5vHYJ: `cta`,
            C3qShFP61: `footer`,
            QgW8DgCR7: `heading`,
          },
          page: E(
            () =>
              import(
                `./begDxoDQKhhEVI4ilJzvpbtKglBSovtjGGwXyH4JPg0.DW0Qgvqc.mjs`
              ),
          ),
          path: `/blog`,
        },
        qBq1NoJf0: {
          elements: {
            HYUqzyxAR: `cta`,
            j0xqdw3Ll: `heading`,
            PPZDTLBms: `footer`,
          },
          page: E(
            () =>
              import(
                `./JUMAmIpdMeu61Xx8cNVwSdmV50GZyMA-or2cxMd0hzU.Cvz7AqPx.mjs`
              ),
          ),
          path: `/industries`,
        },
        GV_hvvJfU: {
          collectionId: `sS_XZEOTg`,
          elements: { CG7tgla5z: `cta`, fPxbcDBYm: `footer` },
          page: E(
            () =>
              import(
                `./RKOuVQOw0veBpGECWJbhbFCSh6dakAe1mKjkxotQRjI.Lb4Cyb0v.mjs`
              ),
          ),
          path: `/blog/:m1Lgae9gS`,
        },
        bNRKojK3U: {
          collectionId: `jeKWmQbwE`,
          elements: {
            a8aMfHlud: `footer`,
            oqoIke8MW: `cta`,
            qYnYPHW6v: `why-buss-2`,
            VdXFtNTV0: `why-buss`,
            zHkbLVr1q: `why-buss-1`,
          },
          page: E(
            () =>
              import(
                `./uAnrSAPfoopOl850iccM9tAJDLChbn4Dn3PMUwHRkx4.EzFsknZ9.mjs`
              ),
          ),
          path: `/industries/:ZQjSIfZHa`,
        },
      }),
      (B = [{ code: `en`, id: `default`, name: `English`, slug: `` }]),
      (V = {
        jeKWmQbwE: async () =>
          (
            await import(
              `./U4NsUAVrzW0rO89_li_30PV5rQTkWWgtRg2S_LRiazs.BnCvOYXU.mjs`
            )
          )?.utils,
        sS_XZEOTg: async () =>
          (
            await import(
              `./sxXSdml0wZiLq7GZq8v0AUkSivv8xaMQc7kD76G5QhY.wz1NcATC.mjs`
            )
          )?.utils,
      }),
      (H = `3a9805ce1c55d0828cd4c21d9194ff0d3b35b80ebc3bd804796d57e06fdf025c`),
      (U = typeof document < `u`),
      U &&
        ((h.__framer_importFromPackage = (e, n) => () =>
          t(v, {
            error:
              `Package component not supported: "` + n + `" in "` + e + `"`,
          })),
        (h.process = {
          ...h.process,
          env: {
            ...(h.process ? h.process.env : void 0),
            NODE_ENV: `production`,
          },
        }),
        (h.__framer_events = h.__framer_events || []),
        T(),
        (W = document.getElementById(`main`)),
        `framerHydrateV2` in W.dataset ? R(!0, W) : R(!1, W));
  });
G();
export { I as getPageRoot };
//# sourceMappingURL=script_main.CaTb9xRX.mjs.map
