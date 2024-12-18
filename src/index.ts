import './style/dazzle.css'
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function dazzle(element: HTMLElement) {
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  element.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const bgColor = getComputedStyle(element).backgroundColor;

    const complementaryColor = calculateComplementaryColor(bgColor);

    overlay.style.setProperty("--x", `${x}px`);
    overlay.style.setProperty("--y", `${y}px`);
    overlay.style.setProperty("--complementary-color", complementaryColor);

    overlay.style.animation = "spiral-expand 1.5s ease-out forwards";

    overlay.addEventListener("animationend", () => {
      overlay.style.animation = "none"; 
      document.body.removeChild(overlay); 
    });
  });
}

// 计算互补色函数
function calculateComplementaryColor(color: string) {
  const rgb = color.match(/\d+/g)!.map(Number);
  const [r, g, b] = rgb;
  return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
}

// 使用示例
// const element = document.getElementById('target-element');
// dazzle(element);