export function getDate(timestamp) {
  const date = new Date(timestamp * 1000);

  // Convert date to the form in the wireframe
  const formattedDate = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return formattedDate;
}
