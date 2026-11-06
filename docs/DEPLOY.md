# Deploying metquay.com to AWS

The site is a static export (`out/`) served from a private S3 bucket through CloudFront. One CloudFront Function (`infra/cloudfront-function.js`) handles clean URLs and redirects. `.github/workflows/deploy.yml` builds, tests and deploys on every push to `main`. Pull requests only build and test.

## One-time setup

1. **S3 bucket**: create a private bucket (e.g. `metquay-web-prod`) in `us-east-1`. Block all public access.
2. **ACM certificate**: in `us-east-1`, request a certificate for `metquay.com` and `www.metquay.com`. Validate via DNS.
3. **CloudFront Function**: create a function named `metquay-routing`, runtime `cloudfront-js-2.0`, paste `infra/cloudfront-function.js`, then publish it.
4. **CloudFront distribution**:
   - Origin: the S3 bucket with Origin Access Control (OAC). Apply the bucket policy CloudFront generates.
   - Alternate domain names: `www.metquay.com`, `metquay.com`. Certificate from step 2.
   - Default root object: `index.html`.
   - Viewer protocol policy: redirect HTTP to HTTPS. Compression on.
   - Function association: viewer request → `metquay-routing`.
   - Custom error responses: 403 and 404 → `/404.html` with response code 404.
   - Response headers policy: managed `SecurityHeadersPolicy`.
5. **GitHub OIDC role**: an IAM role trusted by `token.actions.githubusercontent.com` for this repo, allowed `s3:ListBucket`, `s3:PutObject`, `s3:DeleteObject` on the bucket, `cloudfront:CreateInvalidation` on the distribution, and `cloudfront:DescribeFunction`, `UpdateFunction`, `PublishFunction` on the function.
6. **GitHub environment `production`**: set the variables `AWS_ROLE_ARN`, `BUCKET`, `DISTRIBUTION_ID`, `FUNCTION_NAME`.

## Staging first

Create a second bucket and distribution, but don't attach any alternate domain to it. Add a response headers policy with `X-Robots-Tag: noindex`. Store its variables in a `staging` environment and run the workflow manually (`workflow_dispatch`) from a branch. Review the site on the `*.cloudfront.net` address.

## Cutover

1. Lower the TTL on the current `metquay.com` / `www` DNS records to 300 seconds a day before.
2. Point `www.metquay.com` (CNAME or Route 53 alias) and `metquay.com` (alias/ANAME) at the production distribution.
3. Check: `https://metquay.com/company` → 301 to `https://www.metquay.com/company`, `/hi` → 301 to `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt` return 200.
4. Keep the Framer site live for one week. Rollback means pointing DNS back to Framer.

## After launch

- Google Search Console: verify the domain, submit `https://www.metquay.com/sitemap.xml`, and use the Removals tool for `/hi` URLs.
- Bing Webmaster Tools: import from Search Console and submit the sitemap.
- Check the Rich Results Test on `/`, `/contact` and one blog post.

## Local production preview

```bash
npm run build
npm run serve   # http://localhost:4173, same routing as CloudFront
```
