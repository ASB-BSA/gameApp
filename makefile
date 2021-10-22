up:
	docker-compose up -d
ups:
	docker-compose up -d && \
	docker-compose exec app yarn start
down:
	docker-compose down
build:
	docker-compose build --no-cache --force-rm
	@up
ps:
	docker ps
psc:
	docker-compose ps
app:
	docker-compose exec node sh
dev:
	docker-compose exec node yarn start
build:
	docker-compose exec node yarn build
deploy:
	docker-compose exec node firebase deploy