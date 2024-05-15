const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Sucess"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Sucess"), 5000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 Sucess"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("Promise.all: " + res);
  })
  .catch((err) => {
    console.error("Promise.all: " + err);
  });

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("Promise.allSettled:" + res);
  })
  .catch((err) => {
    console.error("Promise.allSettled:" + err);
  });

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("Promise.any: " + res);
  })
  .catch((err) => {
    console.error("Promise.any: " + err);
  });

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("Promise.race: " + res);
  })
  .catch((err) => {
    console.error("Promise.race: " + err);
  });
