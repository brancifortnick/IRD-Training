FROM node:16.20.2 AS build-stage
WORKDIR /react-app
COPY react-app/. .
# You have to set this because it should be set during build time.
ENV REACT_BASE_APP_URL=https://in-room-dining.com/
# Build our React App
RUN npm install
RUN npm run build
FROM python:3.9
# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True
EXPOSE 8000
WORKDIR /var/www
COPY . .
COPY --from=build-stage /react-app/build/* app/static/
# Install Python Dependencies

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN pip install psycopg2

# Run flask environment

CMD gunicorn app:app