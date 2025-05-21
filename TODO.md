# Todo

## ExternalLink Component Remediation
- [x] **T001 · Refactor · P1: remove `[key: string]: unknown` from `LinkPropsWithButtonProps` in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑01 Type Safety Loophole, Steps 1 & 2
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx`, locate the `LinkPropsWithButtonProps` type definition (around line 36).
        2.  Remove the `[key: string]: unknown;` line from this type.
    - **Done‑when:**
        1.  The `[key: string]: unknown;` line is removed from `LinkPropsWithButtonProps`.
    - **Depends‑on:** none

- [x] **T002 · Refactor · P1: ensure `BaseProps` strictly types passthrough anchor attributes in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑01 Type Safety Loophole, Step 3
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx`, verify that `BaseProps` (or the type used for `restProps` that are spread into `linkProps` or `finalAnchorProps`) is correctly defined using `Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, ...>` to only allow valid anchor attributes.
        2.  Ensure the `Omit` excludes props already handled by component-specific props (e.g., `href`, `children`, `variant`).
        3.  If `BaseProps` is not correctly defined or needs adjustment, update it accordingly.
    - **Done‑when:**
        1.  `BaseProps` (or equivalent type for spreadable anchor attributes) is confirmed or updated to correctly and strictly type passthrough attributes for the `<a>` tag.
    - **Depends‑on:** none

- [x] **T003 · Refactor · P1: explicitly type legitimate passthrough `data-*` or other attributes in `ExternalLink.tsx` if needed**
    - **Context:** PLAN.md – cr‑01 Type Safety Loophole, Step 4
    - **Action:**
        1.  After T001 and T002 are complete, run `pnpm tsc --noEmit` to identify type errors from previously untyped passthrough props.
        2.  If legitimate props (e.g., specific `data-*` attributes) cause errors, explicitly add them to `BaseExternalLinkProps` or a relevant intersected type within `app/components/shared/ExternalLink.tsx`.
    - **Done‑when:**
        1.  All legitimate, previously untyped passthrough attributes are explicitly typed.
        2.  `pnpm tsc --noEmit` shows no new errors related to these newly typed attributes in `ExternalLink.tsx`.
    - **Depends‑on:** [T001, T002]

- [x] **T004 · Chore · P1: validate cr-01 type safety changes and linting for `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑01 Type Safety Loophole, Step 5 & Done-When criteria
    - **Action:**
        1.  Run `pnpm tsc --noEmit`.
        2.  Run `pnpm lint`.
        3.  Address any new type or lint errors in `ExternalLink.tsx` props stemming from cr-01 changes (T001, T002, T003).
    - **Done‑when:**
        1.  `pnpm tsc --noEmit` passes without errors related to `ExternalLink.tsx` props.
        2.  `pnpm lint` passes without errors related to `ExternalLink.tsx` props.
    - **Depends‑on:** [T003]

- [x] **T005 · Refactor · P1: destructure `props` for button variant in `ExternalLink.tsx` separating `buttonProps` and `anchorRestProps`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Steps 1 & 2
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx` (around lines 65-73), for the `variant === "button"` case, refactor prop destructuring.
        2.  Cast `props` to `ButtonLinkProps` and destructure to separate `buttonProps`, other link-specific props (`currentHref`, `currentChildren`, etc.), and `...anchorRestProps` as per the plan's example.
    - **Done‑when:**
        1.  Component `props` for the button variant are destructured as specified, correctly isolating `buttonProps` and `anchorRestProps`.
    - **Depends‑on:** [T004]

- [x] **T006 · Refactor · P1: remove redundant `buttonProps` assignment to `linkProps` in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Step 3
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx`, delete the line `linkProps.buttonProps = buttonProps;`.
    - **Done‑when:**
        1.  The line `linkProps.buttonProps = buttonProps;` is removed.
    - **Depends‑on:** [T005]

- [x] **T007 · Refactor · P1: remove eslint suppression and associated unused `buttonProps` destructuring in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Step 4
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx`, remove the `eslint-disable-next-line @typescript-eslint/no-unused-vars` comment.
        2.  Remove the subsequent destructuring: `const { buttonProps: unusedButtonProps, ...cleanLinkProps } = linkProps;`.
    - **Done‑when:**
        1.  The specified ESLint suppression comment is removed.
        2.  The unused `buttonProps` destructuring from `linkProps` is removed.
    - **Depends‑on:** [T006]

- [ ] **T008 · Refactor · P1: construct `finalAnchorProps` with `anchorRestProps` for button variant in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Step 5
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx` for the button variant, construct the `finalAnchorProps` object for the `<a>` tag using `currentHref`, `currentTarget`, `currentRel`, `currentAriaLabel`, `currentClassName` (merged with `cn`), and spread `anchorRestProps` as per the plan's example.
        2.  Ensure `anchorRestProps` are correctly typed, leveraging the strict typing established in cr-01.
    - **Done‑when:**
        1.  `finalAnchorProps` is correctly constructed for the button variant, incorporating `anchorRestProps` and adhering to strict typing.
    - **Depends‑on:** [T005]

- [ ] **T009 · Refactor · P1: pass `buttonProps` directly to `RetroButton` component in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Step 6
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx`, modify the `<RetroButton />` component invocation within the button variant to receive the isolated `buttonProps` directly.
    - **Done‑when:**
        1.  The `buttonProps` object is passed directly as a prop to the `<RetroButton />` component.
    - **Depends‑on:** [T005]

- [ ] **T010 · Refactor · P1: adjust `LinkPropsWithButtonProps` type or its usage for button variant anchor props in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Step 7
    - **Action:**
        1.  Review the type used for props spread onto the `<a>` tag in the `variant === "button"` case in `app/components/shared/ExternalLink.tsx`.
        2.  If `LinkPropsWithButtonProps` (or a derivative) was effectively typing these anchor props, ensure it's adjusted or replaced so that it does not expect `buttonProps` to be part of the anchor tag's own props.
    - **Done‑when:**
        1.  The type definition for props passed to the `<a>` element in the button variant accurately reflects that `buttonProps` are not spread onto it.
    - **Depends‑on:** [T005, T008]

- [ ] **T011 · Refactor · P2: verify and clarify text variant prop handling in `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Step 8
    - **Action:**
        1.  In `app/components/shared/ExternalLink.tsx`, review the prop handling for the text variant.
        2.  If it shared parts of the convoluted logic or its clarity can be improved post cr-01 changes, refactor it for consistency, ensuring it uses strictly typed props directly.
    - **Done‑when:**
        1.  Prop handling for the text variant is clear, direct, and uses strictly typed props.
    - **Depends‑on:** [T004, T010]

- [ ] **T012 · Chore · P1: validate cr-02 prop handling refactor and linting for `ExternalLink.tsx`**
    - **Context:** PLAN.md – cr‑02 Convoluted Handling of `buttonProps`, Step 9 & Done-When criteria
    - **Action:**
        1.  Run `pnpm tsc --noEmit`.
        2.  Run `pnpm lint`.
        3.  Address any new type or lint errors in `ExternalLink.tsx` props stemming from cr-02 changes (T005-T011).
    - **Done‑when:**
        1.  `pnpm tsc --noEmit` passes without errors related to `ExternalLink`.
        2.  `pnpm lint` passes without errors related to `ExternalLink`, and the targeted suppression is removed.
    - **Depends‑on:** [T007, T008, T009, T010, T011]

- [ ] **T013 · Test · P1: ensure all automated tests for `ExternalLink.tsx` pass after remediation**
    - **Context:** PLAN.md – Validation Checklist
    - **Action:**
        1.  Run all unit and integration tests for `ExternalLink.tsx`.
        2.  If necessary, add new tests to cover the refactored prop handling, specific passthrough props, or distinct variant behaviors.
    - **Done‑when:**
        1.  All existing automated tests for `ExternalLink.tsx` pass.
        2.  Any new tests required by the refactor are added and pass.
    - **Depends‑on:** [T012]

- [ ] **T014 · Chore · P2: perform manual review of `ExternalLink` component in storybook/dev page**
    - **Context:** PLAN.md – Validation Checklist
    - **Action:**
        1.  Manually review `ExternalLink` component in Storybook or a development page.
        2.  Confirm text variant renders correctly with various passthrough anchor attributes.
        3.  Confirm button variant renders correctly, with anchor attributes on the `<a>` tag and button-specific props correctly applied to the `<RetroButton>`.
        4.  Inspect the DOM for both variants to confirm no unexpected attributes are present.
    - **Done‑when:**
        1.  Manual review confirms correct rendering and attribute application for all variants as per the plan.
        2.  No unexpected attributes are found on DOM elements.
    - **Verification:**
        1.  For text variant: Test `id`, `data-testid`, `target`, `rel`, `aria-label`, `className` are correctly applied to the `<a>` tag.
        2.  For button variant: Test anchor-specific props (e.g., `id` for `<a>`) and `buttonProps` (e.g., a button `variant`, `disabled`) are correctly applied to the `<a>` tag and the `<RetroButton>` respectively.
    - **Depends‑on:** [T013]

- [ ] **T015 · Chore · P2: conduct final code review for all `ExternalLink.tsx