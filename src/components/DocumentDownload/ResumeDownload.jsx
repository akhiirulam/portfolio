import { useState } from "react";

function ResumeDownload() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://res.cloudinary.com/dzj1widog/raw/upload/v1234567890/Akhil_Chandran_Resume.pdf",
      );

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = "Akhil_Chandran_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white disabled:opacity-50"
    >
      {loading ? "Downloading..." : "Download Resume"}
    </button>
  );
}

export default ResumeDownload;
