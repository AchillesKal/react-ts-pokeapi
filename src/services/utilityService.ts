function beutifyLabel(label: string): string {
  const words = label.split("-");

  const wordsFinal: string[] = words.map((item: string) => {
    return item[0].toUpperCase() + item.slice(1);
  });

  return wordsFinal.join(" ");
}

function shortifyLabel(label: string): string {
  if (label.length < 8) {
    return label.substring(0, 2).toUpperCase();
  }

  const words = label.split("-");

  const wordsFinal: string[] = words.map((item) => {
    return item.charAt(0);
  });

  return wordsFinal.join("").toUpperCase();
}

export { beutifyLabel, shortifyLabel };
