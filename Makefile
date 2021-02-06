build-dev:
	docker-compose -f docker-compose.yml build 

dev:
	docker-compose -f docker-compose.yml up

install:
	cd server
	yarn install
	cd ..
	cd client
	yarn install
	cd ..