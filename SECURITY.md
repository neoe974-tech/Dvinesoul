# Dvinesoul Deployment Security

## Directory listing

Directory browsing must remain disabled in production. Apache deployments use `.htaccess` with `Options -Indexes`; Nginx deployments use `autoindex off`.

## Sensitive files

Do not place secrets, credentials, private keys, database dumps, logs, or `.env` files in the public web root. The included deployment examples deny access to common sensitive paths.

## HTTPS

Production deployments should use HTTPS and redirect HTTP to HTTPS at the reverse proxy or hosting provider.

## Headers

The Apache configuration includes baseline security headers. Review and expand the policy for the final production architecture rather than copying a permissive policy blindly.

## Application architecture

Client-side JavaScript must never contain private API keys, passwords, signing secrets, database credentials, or server-only configuration.

## Reporting

Do not publish credentials, private keys, session tokens, or personal information in issues or commits. Rotate any secret that is accidentally exposed.
