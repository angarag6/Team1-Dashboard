let count: number = 1;

export default function SetColor(btn: string, color: string): void {
  const property: HTMLElement | null = document.getElementById(btn);

  if (property !== null) {
    if (count === 0) {
      property.style.backgroundColor = "#FFFFFF";
      count = 1;
    } else {
      property.style.backgroundColor = "#7FFF00";
      count = 0;
    }
  }
}
