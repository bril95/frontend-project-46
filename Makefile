install:
	npm ci

gendiff:
	node/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest

test-covarage:
	nom test -- --coverage --coverageProvider=v8