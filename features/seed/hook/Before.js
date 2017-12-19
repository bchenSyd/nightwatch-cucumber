import { client } from 'nightwatch-cucumber';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Before, After }) => {
  Before('@mobile', () => {
    client.resizeWindow(320, 620);
  });
  Before('@desktop', () => {
    client.resizeWindow(1280, 1024);
  });
});
