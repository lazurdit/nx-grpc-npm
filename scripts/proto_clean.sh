grep '"nx.server/protos/'  -i ./proto/ -r -s -l | xargs  sed -i -e 's/"[Nn]x\.server\/[Pp]rotos\//"/gi'
