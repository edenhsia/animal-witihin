export function openImagePreview(dataUrl: string, title: string): boolean {
  const win = window.open()

  if (!win) return false

  const html = `
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="margin:0;">
        <iframe src="${dataUrl}" frameborder="0"
          style="border:0; position:fixed; top:0; left:0; width:100vw; height:100vh;"
          allowfullscreen>
        </iframe>
      </body>
    </html>
  `

  win.document.open()
  win.document.write(html)
  win.document.close()

  return true
}
