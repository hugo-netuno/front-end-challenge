let pageNumber = 1;
let xhr = new XMLHttpRequest();
let response = [];
let totalPages = 0;
let over = false;

const getMore = () => {
  return new Promise(function (resolve, reject) {
    if (over) {
      // alert('Sem mais páginas');
      resolve(response);
      return;
    }
    xhr.open('get', `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${pageNumber}`);
    xhr.responseType = 'json';
    xhr.onload = function () {
      console.log(pageNumber);
      if (totalPages === 0) totalPages = xhr.getResponseHeader('x-wp-totalpages');
      if (pageNumber <= totalPages) pageNumber++;
      console.log(totalPages);
      console.log(xhr.getResponseHeader('x-wp-total'));
      response = response.concat(xhr.response);
      console.log(response);
      let status = xhr.status;
      if (pageNumber > totalPages) {
          over = true;
          if (status === 200) {
            resolve(response);
          } else {
            reject(status);
          }
        }
        if (status === 200) {
          resolve(response);
        } else {
          reject(status);
        }
      }
      xhr.send();
  })}
  
export default getMore;
