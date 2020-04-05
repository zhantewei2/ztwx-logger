@ztwx/logger
---
Frontback logger tools.

default for terminal.


### logger level 

- debug
- info
- warn
- error

### use

```
const {LoggerFactory}=require("@ztwx/logger");
const log=LoggerFactory.getLogger(__filename);

log.info("hello info")
log.debug("hello debug)
```

### specify logger level
```shell 
LoggerFactory.config({
  level:"info"
})
```
this change will effects global logger.

