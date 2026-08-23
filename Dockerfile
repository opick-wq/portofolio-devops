# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./
RUN npm ci --only=production
# Copy source code
COPY . .
# Build the React app
RUN npm run build
# ---- Production stage ----
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf
# Add custom nginx config to handle SPA routing
ADD <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;
    # For client-side routing, serve index.html for any non-files request
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
EXPOSE 80
# Use default CMD from nginx image (runs in foreground)