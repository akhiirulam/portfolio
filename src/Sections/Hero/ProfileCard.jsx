function ProfileCard() {
  return (
    <div
      className="relative mx-auto my-8 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 p-5 shadow-2xl sm:max-w-md sm:p-6 lg:max-w-lg lg:p-8"
      style={{ background: "var(--surface)" }}
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl sm:h-52 sm:w-52" />

      <div className="relative z-10">
        {/* Profile Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://res.cloudinary.com/dzj1widog/image/upload/v1785295418/profile_y5q1ym.jpg"
            alt="Akhil Chandran"
            className="aspect-[4/4] w-full rounded-2xl object-cover"
          />
        </div>

        {/* Details */}
        <div className="mt-6 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[4px] text-gray-400 sm:tracking-[6px]">
              Email
            </p>

            <p
              className="mt-2 break-all text-base font-bold sm:text-lg lg:text-xl"
              style={{ color: "var(--text)" }}
            >
              akhiirulam@gmail.com
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[4px] text-gray-400 sm:tracking-[6px]">
              GitHub
            </p>

            <p
              className="mt-2 text-base font-bold sm:text-lg lg:text-xl"
              style={{ color: "var(--text)" }}
            >
              @akhiirulam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
