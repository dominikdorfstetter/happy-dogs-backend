FROM postgres
RUN apt-get update && apt-get install -y dos2unix
COPY postgres-initdb /docker-entrypoint-initdb.d
RUN dos2unix /docker-entrypoint-initdb.d/bootstrap.sh && apt-get --purge remove -y dos2unix && rm -rf /var/lib/apt/lists/*
