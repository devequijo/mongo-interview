const { exec } = require("child_process");

exec('json-fix first.json')
exec('json-fix second.json')
exec('mongoimport --db backendInterview --collection first --file first.json --jsonArray')
exec('mongoimport --db backendInterview --collection second --file second.json --jsonArray')