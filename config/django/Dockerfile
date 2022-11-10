FROM python:3.9.6-alpine

WORKDIR /usr/src/app

EXPOSE 8000

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .

CMD ["./venv/bin/gunicorn", "--workers", "3", "disco_fever.wsgi:application",  "--bind",  "0.0.0.0:8000"]
