export const reformArrayPics = (data) => {
  let newArr = [];

  data.forEach((el) => {
    let newObj = {
      img: el.urls.thumb,
      title: el.description
    };

    newArr.push(newObj);
  });

  return newArr;
};
