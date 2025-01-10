#!/bin/bash
# deploy.sh

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

cd /var/www/22archetypes.com/ \
  && git checkout main \
  && git fetch origin \
  && git pull origin main \
  && nvm use \
  && yarn install \
  && yarn build

