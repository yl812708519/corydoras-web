#!/bin/bash


expect -c "set timeout 3;
           spawn scp -r content/ admin@120.25.123.175:/home/admin/deploy/corydora/phpcms/templates/corydora/ ;
           expect \"password:\";
           send \"7c3cD505\r\";
           interact
           "
#send \"cd deploy\/www-yestar-web\/\r\"
#send \"git pull origin\r\"
#send \".\/bin/run.sh restart test\r\"

