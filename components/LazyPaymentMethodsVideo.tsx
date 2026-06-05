"use client";

import dynamic from "next/dynamic";

type LazyPaymentMethodsVideoProps = Record<string, never>;

const PaymentMethodsVideo = dynamic<LazyPaymentMethodsVideoProps>(
  () =>
    import("@/components/PaymentMethodsVideo").then(
      (module) => module.PaymentMethodsVideo
    ),
  {
    ssr: false,
    loading: () => (
      <section
        aria-hidden="true"
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#050505]"
      >
        <div className="relative h-[220px] w-full overflow-hidden bg-[#050505] sm:h-[260px] md:h-[380px] lg:h-[460px] xl:h-[520px]" />
      </section>
    )
  }
);

export function LazyPaymentMethodsVideo(props: LazyPaymentMethodsVideoProps) {
  return <PaymentMethodsVideo {...props} />;
}
