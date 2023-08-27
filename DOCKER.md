# migration

- to get the [api_container_name] run `docker ps` and look for the container name of the api

```bash
docker exec -it [api_container_name] sh
# Now inside the container
npx prisma migrate dev
```

# run PSQL

```bash
docker exec -it [api_container_name] psql -U postgres
# ex. docker exec -it integration-tests-prisma psql -U postgres
```