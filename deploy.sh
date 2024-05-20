aws s3 sync out/ s3://prod-blockify-landing-page
aws cloudfront create-invalidation --distribution-id E2C84TBMPFXP7L --paths "/*"
