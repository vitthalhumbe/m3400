"use client"

export default function AboutHome() {
  return (
    <div className="relative h-full w-full overflow-hidden px-[10%] py-[10%]">
      
      {/* BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute right-30 top-1/2 -translate-y-1/2 opacity-80">
        <img
          src="/me.png"
          alt="Vitthal Humbe"
          className="max-h-[755px] object-contain"
        />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-7xl font-bold text-white">
          I am{" "}
          <span className="text-violet-500">
            Vitthal Humbe
          </span>
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-neutral-300">
          I'm a Computer Science student under the AI/ML domain, focused on
          building various real life applications & systems in AIML and
          software engineering. Currently working on my personal mission
          which I call “Mission34” which is the centre house of showing my
          all skills. I prefer understanding core systems beforehand and
          building them step-by-step, thus I always start with planning and
          organising. In Long-term, I’m interested in roles that combine
          software designs, algorithm development, machine learning and
          problem solving.
        </p>

        {/* ROLE TAGS */}
        <div className="mt-6 flex gap-3">
          <span className="rounded-md bg-neutral-700 px-3 py-1 text-xs text-white">
            Web developer
          </span>
          <span className="rounded-md bg-neutral-700 px-3 py-1 text-xs text-white">
            App developer
          </span>
          <span className="rounded-md bg-neutral-700 px-3 py-1 text-xs text-white">
            ML Engineer
          </span>
        </div>
      </div>

    </div>
  )
}
