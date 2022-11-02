import React from "react";
import PdfViewerComponent from "../../components/PdfViewerComponent";

function Resume() {
  return (
    <div>
      <PdfViewerComponent document={"document.pdf"} />
      pdf
    </div>
  );
}

export default Resume;
