# PDF Files

This folder contains publication PDFs that are served directly from the website.

## Adding a New PDF

1. Place your PDF file in this folder
2. Reference it in your code with `/files/filename.pdf`

Example:
```tsx
pdfUrl: "/files/forhumanity-certification.pdf"
```

## URL Structure

PDFs will be accessible at:
```
https://responsibleaigovernance.org/files/filename.pdf
```

That's it! No environment variables, no upload scripts, no Blob storage needed.
