# Deployment Guide 🚀

SQL-Practice-Lab can be deployed on various platforms. Choose the one that best fits your needs.

## Local Development

### Prerequisites
- Node.js >= 16
- npm or yarn
- Git

### Setup

```bash
git clone https://github.com/roxtardevil13/SQL-Practice-Lab.git
cd SQL-Practice-Lab
npm install

cp .env.example .env
# Edit .env with your configuration

npm run dev  # Starts both frontend and backend
```

Access the app at `http://localhost:3000`

## Production Deployment

### Option 1: Vercel (Frontend) + Railway (Backend)

#### Deploy Frontend on Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   ```
   REACT_APP_API_URL=https://your-backend-api.com
   ```
5. Deploy

#### Deploy Backend on Railway

1. Visit [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Add environment variables in Railway dashboard
5. Railway will automatically detect and deploy

### Option 2: Heroku (Full Stack)

#### Create Procfile

```
web: node server/server.js
```

#### Deploy

```bash
heroku login
heroku create sql-practice-lab
heroku config:set NODE_ENV=production
heroku config:set CORS_ORIGIN=https://your-app.com
git push heroku main
```

### Option 3: DigitalOcean App Platform

1. Connect GitHub repository
2. Create `app.yaml`:

```yaml
name: sql-practice-lab
services:
- name: frontend
  github:
    repo: roxtardevil13/SQL-Practice-Lab
    branch: main
  build_command: npm run build
  http_port: 3000
- name: backend
  github:
    repo: roxtardevil13/SQL-Practice-Lab
    branch: main
  build_command: cd server && npm install
  run_command: cd server && npm start
  http_port: 5000
```

3. Deploy through DigitalOcean dashboard

### Option 4: Docker (Any Platform)

#### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build
RUN cd server && npm ci --only=production

EXPOSE 3000 5000

CMD ["npm", "run", "dev"]
```

#### Deploy on Docker Hub

```bash
docker build -t your-username/sql-practice-lab .
docker push your-username/sql-practice-lab
```

## Environment Variables for Production

```env
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-domain.com
DATABASE_URL=/data/practice.db
SESSION_SECRET=your-production-secret-key
REACT_APP_API_URL=https://api.your-domain.com
```

## SSL/HTTPS

- **Vercel**: Automatic HTTPS
- **Railway**: Automatic HTTPS
- **Heroku**: Free HTTPS included
- **DigitalOcean**: Configure with Let's Encrypt
- **Docker**: Use Nginx with Certbot

## Database Persistence

### For Production

Consider migrating to PostgreSQL:

1. Install pg adapter
2. Update connection string
3. Run migrations

```bash
npm install pg
```

## Monitoring & Logging

- **Vercel**: Built-in analytics
- **Railway**: Web dashboard
- **Heroku**: Logs via CLI
- **DigitalOcean**: App platform monitoring

## Performance Optimization

1. Enable gzip compression
2. Implement caching headers
3. Use CDN for static assets
4. Optimize database queries
5. Set up rate limiting

## Backup & Recovery

```bash
# Backup database
cp data/practice.db data/practice.db.backup

# Restore database
cp data/practice.db.backup data/practice.db
```

## Troubleshooting

### Port already in use
```bash
lsof -i :5000  # Find process
kill -9 <PID>  # Kill it
```

### Database locked
```bash
rm data/practice.db-wal
rm data/practice.db-shm
```

### CORS errors
Update CORS_ORIGIN in environment variables

## Support

For deployment issues, open an issue on GitHub or check deployment platform documentation.
