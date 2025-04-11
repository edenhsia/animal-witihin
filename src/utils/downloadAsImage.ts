import html2canvas from 'html2canvas'
import Canvas2Image from 'canvas2image-2'

export async function downloadAsImage({
  elementId,
  buttonRef,
}: {
  elementId: string
  buttonRef?: React.RefObject<HTMLElement | null>
}) {
  const el = document.getElementById(elementId)
  if (!el) {
    console.warn('Element not found:', elementId)
    return
  }

  try {
    if (buttonRef?.current instanceof HTMLElement) {
      buttonRef.current.style.display = 'none'
    }

    await new Promise((r) => setTimeout(r, 100))

    const canvas = await html2canvas(el, {
      useCORS: true,
      backgroundColor: 'transparent',
    })

    Canvas2Image.saveAsPNG(canvas, canvas.width, canvas.height)
  } catch (error) {
    console.error('圖片下載失敗', error)
  } finally {
    if (buttonRef?.current instanceof HTMLElement) {
      buttonRef.current.style.display = 'block'
    }
  }
}
