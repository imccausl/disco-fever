FROM python:3.9-slim

RUN ls -la
RUN mkdir app
COPY requirements.txt /app/requirements.txt

RUN python -m venv venv \
    && pip install --no-cache-dir -r /app/requirements.txt

COPY . /app

WORKDIR /app
RUN ls -la

EXPOSE 8000

CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "disco_fever.wsgi:application"]

