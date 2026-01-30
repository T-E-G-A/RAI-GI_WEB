# Simplified PDF Setup (No Vercel Blob)

## ✅ What We Have Now

A simple, clean approach to serving PDFs directly from your website.

## 📁 File Structure

```
/public/files/
  ├── forhumanity-certification.pdf
  └── README.md
```

## 🔗 How It Works

### 1. Add PDF to `/public/files/`
Just drop your PDF in the folder.

### 2. Reference in Code
```tsx
// In your articles page or modal
pdfUrl: "/files/forhumanity-certification.pdf"
```

### 3. Link to It
```tsx
<a 
  href={publication.pdfUrl} 
  target="_blank" 
  rel="noopener noreferrer"
>
  View Full Report
</a>
```

That's it! No environment variables, no upload scripts, no Blob storage.

## 🌐 URLs

PDFs are accessible at:
```
https://responsibleaigovernance.org/files/forhumanity-certification.pdf
```

- ✅ Clean URL with your custom domain
- ✅ Opens in new browser tab
- ✅ Users can view or download
- ✅ Perfect for citations

## 📝 Adding More PDFs

1. Drop PDF in `/public/files/`
2. Update your article data:
   ```tsx
   {
     title: "New Article",
     pdfUrl: "/files/new-report.pdf",
     // ...
   }
   ```
3. Done!

## 🚀 Deployment

When you deploy to Vercel:
- PDFs are deployed with your code
- Served from your domain
- Fast CDN delivery
- No extra configuration needed

## 💡 Benefits

✅ **Simple**: No complex setup  
✅ **Clean URLs**: Your domain, professional paths  
✅ **Fast**: Served from Vercel's CDN  
✅ **Reliable**: Files versioned with your code  
✅ **No overhead**: No environment variables to manage  

## 🔄 Removed Complexity

We removed:
- ❌ `@vercel/blob` package
- ❌ API routes (`/app/api/files/`)
- ❌ Upload scripts
- ❌ Environment variables for each PDF
- ❌ Rewrite rules in `next.config.ts`

## 📊 When to Use Vercel Blob Instead

Consider Blob only if you have:
- 100+ PDFs
- PDFs that change frequently without code changes
- Very large files (100MB+)
- Need to update PDFs without redeploying

For a few academic reports, `/public/files/` is perfect! 🎯
