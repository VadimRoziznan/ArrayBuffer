import ArrayBufferConverter from "../js/class/ArrayBufferConverter.js";
import getBuffer from "../js/app.js";

test('ArrayBufferConverter should correctly load and convert ArrayBuffer to string', () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  converter.load(buffer);
  const result = converter.toString();

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('ArrayBufferConverter throw new Error', () => {
    expect(() => {
        new ArrayBufferConverter().toString();
    }).toThrow('Buffer is not loaded');
  
  });
