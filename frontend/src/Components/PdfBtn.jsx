import jsPDF from "jspdf";

export default function PdfBtn() {
  const makePdf = () => {
    const doc = new jsPDF();

    const topics =
      JSON.parse(
        localStorage.getItem("topics")
      ) || [];

    doc.setFontSize(18);

    doc.text(
      "AI Study Planner Report",
      20,
      20
    );

    doc.setFontSize(12);

    let y = 40;

    topics.forEach((t, i) => {
      doc.text(
        `${i + 1}. ${t.name} - ${
          t.done
            ? "Completed"
            : "Pending"
        }`,
        20,
        y
      );

      y += 10;
    });

    doc.save("study-plan.pdf");
  };

  return (
    <button
      onClick={makePdf}
      className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl"
    >
      Download PDF
    </button>
  );
}