var env = process.env.BUILD_ENV;
module.exports = {
  NODE_ENV: env == 'test' ? '"production_test"' : '"production"'
}
