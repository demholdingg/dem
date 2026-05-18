# Stage 1: Install dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js mengumpulkan data telemetri anonim secara default.
# Nonaktifkan jika Anda ingin privasi lebih atau saat build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Salin file yang diperlukan dari stage builder
COPY --from=builder /app/public ./public

# Set izin yang tepat untuk prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Otomatis menyalin standalone output yang dibuat oleh builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname ke localhost agar bisa diakses di luar container
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]