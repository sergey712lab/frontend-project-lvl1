install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .

brain-even:
	node src/bin/brain-even.js

brain-calc:
	node src/bin/brain-calc.js

brain-gcd:
	node src/bin/brain-gcd.js

brain-progression:
	node src/bin/brain-progression.js

brain-prime:
	node src/bin/brain-prime.js
