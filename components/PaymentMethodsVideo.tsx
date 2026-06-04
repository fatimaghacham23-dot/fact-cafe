export function PaymentMethodsVideo() {
  return (
    <section
      aria-label="FACT payment methods"
      className="
        relative
        left-1/2
        right-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#050505]
      "
    >
      <div
        className="
          relative
          h-[220px]
          w-full
          overflow-hidden
          bg-[#050505]

          sm:h-[260px]
          md:h-[380px]
          lg:h-[460px]
          xl:h-[520px]
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/payment-method-poster.jpg"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source src="/videos/payment-method-loop.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-black/25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_42%,rgba(0,0,0,0.82)_100%)]" />

        <div
          className="
            pointer-events-none
            absolute
            left-6
            top-6
            rounded-full
            border
            border-white/10
            bg-black/25
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.24em]
            text-white/55
            backdrop-blur-md

            md:left-10
            md:top-10
          "
        >
          NFC · Card · Cash
        </div>
      </div>
    </section>
  );
}
