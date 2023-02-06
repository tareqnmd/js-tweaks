const getElm = (link, target) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', `${link}`, true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                const dom = new DOMParser().parseFromString(xhr.responseText, 'text/html');
                resolve(dom.querySelector(target));
            }
        }
        //xhr.responseType = 'document';
        //xhr.onload = () => resolve(xhr.response.querySelector(target));
		xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}

const func = async() => {
  const hrefLink = 'tareq.com';
  const identifier = 'div';
  const findElm = await getElm(hrefLink,identifier);
}
