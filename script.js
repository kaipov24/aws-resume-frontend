document.getElementById("year").textContent = new Date().getFullYear();

async function updateVisitorCount() {
  const apiUrl = "https://ylql7qtyqa.execute-api.eu-west-1.amazonaws.com/count";

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    document.getElementById("visitor-count").textContent = data.visits ?? "N/A";
  } catch {
    document.getElementById("visitor-count").textContent = "error";
  }
}

updateVisitorCount();
