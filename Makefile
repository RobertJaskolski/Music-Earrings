build-dev:
	docker-compose -f docker-compose.dev.yml build 

dev:
	docker-compose -f docker-compose.dev.yml up

install:
	cd server
	yarn install
	cd ..
	cd client
	yarn install
	cd ..