import { takeAndCompareScreenshot } from "./testing-utils";

describe("m-shader", () => {
  test("visible and clickable", async () => {
    const page = await __BROWSER_GLOBAL__.newPage();
    await page.setViewport({ width: 1024, height: 1024 });
    await page.goto("http://localhost:7079/m-shader-test.html/reset");
    await page.waitForSelector("m-shader[id='simple-shader']");
    await takeAndCompareScreenshot(page);

    await page.click("canvas", { offset: { x: 512, y: 640 } });
    await page.waitForSelector("m-shader[data-scale='2']");
    await takeAndCompareScreenshot(page);

    await page.close();
  }, 60000);

  test("single child texture", async () => {
    const page = await __BROWSER_GLOBAL__.newPage();
    await page.setViewport({ width: 1024, height: 1024 });
    await page.goto("http://localhost:7079/m-shader-single-texture-test.html/reset");

    await page.waitForSelector("m-shader[id='single-texture-shader']");
    await takeAndCompareScreenshot(page);

    await page.close();
  }, 60000);

  test("child shader updates parent", async () => {
    const page = await __BROWSER_GLOBAL__.newPage();
    await page.setViewport({ width: 1024, height: 1024 });
    await page.goto("http://localhost:7079/m-shader-single-texture-test.html/reset");

    await page.waitForSelector("m-shader[id='single-texture-shader']");
    await takeAndCompareScreenshot(page);

    await page.click("canvas", { offset: { x: 512, y: 640 } });
    await page.waitForSelector("m-shader[data-scale='3']");
    await takeAndCompareScreenshot(page);

    await page.close();
  });

  test("many child textures", async () => {
    const page = await __BROWSER_GLOBAL__.newPage();
    await page.setViewport({ width: 1024, height: 1024 });
    await page.goto("http://localhost:7079/m-shader-many-textures-test.html/reset");

    await page.waitForSelector("m-shader[id='many-textures-shader']");
    await takeAndCompareScreenshot(page);

    await page.close();
  }, 60000);
});
