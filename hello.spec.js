const winston = require("winston");
const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

describe("hello", () => {
  it('2+2', (done) => {
    expect(2).toEqual(2);
    setTimeout(done, 2000)
  });

  it.todo("hello")
});

describe("hellos", () => {
  it('2+2', () => {
    logger.info("hello");
    logger.info("hello")
    expect(2).toEqual(2);
  });

  it.todo("should do something")
  it.todo("hellos")
});