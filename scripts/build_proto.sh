
PROTO_DIR=./src/nx_types
JS_PROTO_DIR=./dist/nx_types
mkdir ./dist
mkdir ${PROTO_DIR}  
mkdir ${JS_PROTO_DIR}
mkdir ${PROTO_DIR}/erp 
mkdir ${JS_PROTO_DIR}/erp

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto \
    proto/erp/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    -I ./proto \
    proto/*.proto \
    proto/erp/*.proto



# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${JS_PROTO_DIR} \
    --grpc_out=${JS_PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto \
    proto/erp/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${JS_PROTO_DIR} \
    -I ./proto \
    proto/*.proto \
    proto/erp/*.proto


# PROTO_DIR=./src/nx_types
# JS_PROTO_DIR=./dist/nx_types
# mkdir ./dist
# mkdir ${PROTO_DIR}  
# mkdir ${JS_PROTO_DIR}
# mkdir ${PROTO_DIR}/erp 
# mkdir ${JS_PROTO_DIR}/erp

# # Generate JavaScript code
# yarn run grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${PROTO_DIR} \
#     --grpc_out=grpc_js:${PROTO_DIR} \
#     --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#     -I ./proto \
#     proto/*.proto \
#     proto/erp/*.proto

# # Generate TypeScript code (d.ts)
# yarn run grpc_tools_node_protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=grpc_js:${PROTO_DIR} \
#     -I ./proto \
#     proto/*.proto \
#     proto/erp/*.proto



# # Generate JavaScript code
# yarn run grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${JS_PROTO_DIR} \
#     --grpc_out=grpc_js:${JS_PROTO_DIR} \
#     --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#     -I ./proto \
#     proto/*.proto \
#     proto/erp/*.proto

# # Generate TypeScript code (d.ts)
# yarn run grpc_tools_node_protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=grpc_js:${JS_PROTO_DIR} \
#     -I ./proto \
#     proto/*.proto \
#     proto/erp/*.proto