function ProfileCard() {
  return (
    <div className="relative w-[420px] rounded-3xl border border-white/10 bg-gray-200 p-8 shadow-2xl overflow-hidden my-10">
      <div className="absolute left-1/2 top-1/2 h-52 w-52 rounded-full bg-blue-500/30 blur-3xl"></div>

      <div className="relative z-10">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://res.cloudinary.com/dzj1widog/image/upload/v1785295418/profile_y5q1ym.jpg"
            alt="Akhil Chandran"
            className="h-72 w-full object-cover"
          />
        </div>

        <div className="mt-8 space-y-2">
          <div>
            <p className="text-xs uppercase tracking-[6px] text-gray-400">
              Email
            </p>

            <p className="mt-2 text-xl font-bold text-black">
              akhiirulam@gmail.com
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[6px] text-gray-400">
              GitHub
            </p>

            <p className="mt-2 text-xl font-bold text-black">@akhiirulam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
