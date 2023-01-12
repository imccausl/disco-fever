FROM python:3.9.6-alpine

WORKDIR /usr/src/app

EXPOSE 8000

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

CMD ["gunicorn", "--workers", "3", "disco_fever.wsgi:application",  "--bind",  "0.0.0.0:8000"]
