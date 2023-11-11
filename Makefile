
startpg:
	pg_ctl -D "C:\Program Files\PostgreSQL\13\data" start

restartpg:
	pg_ctl -D "C:\Program Files\PostgreSQL\13\data" restart

stoppg:
	pg_ctl -D "C:\Program Files\PostgreSQL\13\data" stop

startredis:
	docker run -p 6379:6379 redis --appendonly no

startweb:
	npm run web --prefix ..\DietiDeals24-frontend
