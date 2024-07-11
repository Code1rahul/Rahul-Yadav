function downloadResume() {
  // Specify the path to your PDF file
  const fileUrl = "/my_resume/resume.pdf";

  // Create a link element
  const link = document.createElement("a");

  // Set the href attribute to the file URL
  link.href = fileUrl;

  // Set the download attribute to specify the filename
  link.download = "resume.pdf";

  // Append the link to the body
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Clean up: remove the link
  document.body.removeChild(link);
}
