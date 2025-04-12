import html2canvas from 'html2canvas'
import Canvas2Image from 'canvas2image-2'

export async function downloadAsImage({
  elementId,
  hideRef,
}: {
  elementId: string
  hideRef?: React.RefObject<HTMLElement | null>
}) {
  const el = document.getElementById(elementId)
  if (!el) {
    console.warn('Element not found:', elementId)
    return
  }

  try {
    if (hideRef?.current instanceof HTMLElement) {
      hideRef.current.style.display = 'none'
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
    if (hideRef?.current instanceof HTMLElement) {
      hideRef.current.style.display = 'block'
    }
  }
}
