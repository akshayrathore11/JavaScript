function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log("Data : ", dataID);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

getData(1, () => {
  console.log("Getting data2....");
  getData(2, () => {
    console.log("Getting data 3....");
    getData(3, () => {
      console.log("Getting data4....");
      getData(4, () => {
        console.log("Terminate");
      });
    });
  });
});

