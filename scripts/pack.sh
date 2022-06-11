rm -rf ./pkg
mkdir pkg
cp -R ./dist/ ./pkg
cp -R ./src/ ./pkg
cp package.json ./pkg 
cp LICENSE ./pkg  
cp readme.md ./pkg 
npm pack ./pkg --pack-destination ~