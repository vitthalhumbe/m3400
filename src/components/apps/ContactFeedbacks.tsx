"use client"

export default function ContactFeedback() {
  const publicFeedbacks = [
    {
      id: 1,
      name: "vaibhavi_swami",
      time: "5d ago",
      message:
        "Clean design and very thoughtful structure. The desktop-style layout feels unique and intentional.",
    },
    {
      id: 2,
      name: "yash_gajawani",
      time: "18d ago",
      message:
        "This portfolio stands out because it feels engineered, not decorated.The desktop-OS concept is executed thoughtfully, and the content inside each section is clear and honest.I especially liked how you’ve separated skills, story, and future plans instead of mixing everything together.It reflects someone who thinks in systems and values structure over shortcuts.Looking forward to seeing how you expand the projects section.",
    },
  ]

  const hasFeedbacks = publicFeedbacks.length > 0

  return (
    <div className="h-full w-full overflow-y-auto">      
      <div className="flex min-h-full w-full px-10 py-8 gap-12 justify-around items-center">
        
        {/* LEFT TEXT */}
        <div className="flex-1 max-w-xl ">
          <h1 className="text-4xl font-semibold text-white">
            So, How was your experience?
          </h1>

          <p className="mt-3 text-5xl font-bold text-white">
            Tell me by sharing your{" "}
            <span className="text-violet-500">Feedback</span>
          </p>

          <p className="mt-8 text-neutral-400 text-3xl">
            Want to just say Hello?<br />
            Want to collaborate in Projects?
          </p>

          <p className="mt-4 text-lg text-neutral-300">
            Just fill the form and hit the submit button →
          </p>

          {hasFeedbacks && (
            <p className="mt-12 text-lg text-neutral-400">
              Scroll down to see what others said ↓
            </p>
          )}
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 max-w-md">
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-sm text-neutral-400">Name</label>
              <input className="mt-1 w-full rounded-md border border-neutral-700 bg-transparent px-4 py-2 text-neutral-200 outline-none" />
            </div>

            <div>
              <label className="text-sm text-neutral-400">Email</label>
              <input className="mt-1 w-full rounded-md border border-neutral-700 bg-transparent px-4 py-2 text-neutral-200 outline-none" />
            </div>

            <div>
              <label className="text-sm text-neutral-400">Message</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-md border border-neutral-700 bg-transparent px-4 py-2 text-neutral-200 outline-none"
              />
            </div>

            <button className="mt-4 rounded-md bg-violet-600 py-2 font-medium text-white hover:bg-violet-500">
              Submit
            </button>
          </div>
        </div>
      </div>


      {hasFeedbacks && (
        <div className="w-full px-10 pb-10">
          <h2 className="mb-6 ml-20 text-lg font-medium text-neutral-300">
            Here are some top feedbacks I received
          </h2>

          <div className="flex flex-col gap-4 ml-20 mr-20">
            {publicFeedbacks.map(feedback => (
              <div
                key={feedback.id}
                className="rounded-lg bg-neutral-700 px-5 py-4 text-neutral-300"
              >
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <span className="text-violet-400">
                    @{feedback.name}
                  </span>
                  <span>•</span>
                  <span>{feedback.time}</span>
                </div>

                <p className="mt-2 text-sm leading-relaxed">
                  {feedback.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
