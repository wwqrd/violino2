default: isclean build checkin
.PHONY: default analyse

isclean:
	@if ! git diff-index --quiet HEAD --; \
	then \
	echo 'Uncommited changes, exiting.'; \
	exit 1; \
	fi; \
	echo 'Clean, continuing'

build:
	env NODE_ENV=production webpack --optimize-minimize --optimize-occurrence-order --optimize-dedupe

checkin:
	@if git diff-index --quiet HEAD --; \
	then \
	echo 'No changes, exiting.'; \
	exit 1; \
	fi; \
	git add -A public; \
	git commit -m "Build."

analyse:
	webpack --json | webpack-bundle-size-analyzer
