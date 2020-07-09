const yargs = require('yargs');

yargs
  .command({
    command: 'get',
    describe: 'make a get HTTP request',
    builder: function (yargs) {
      return yargs.option('u', {
        alias: 'url',
        describe: 'the URL to make an HTTP request to',
      });
    },
    handler: function (argv) {
      console.log(`Requesting url: ${argv.url}`);
    },
  })
  .help().argv;
