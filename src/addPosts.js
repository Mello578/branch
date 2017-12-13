const getData = function (storageKey) {
	return JSON.parse(localStorage.getItem(storageKey));
};

function load(url) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onloadend = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.status);
			}
		};
		xhr.send(null);
	})
}

export const addPosts = (data) => {
	if (!localStorage.getItem(data)) {
		return load('../posts.json')
			.then((text) => {
				localStorage.setItem(data, text);
				return getData(data);
			})
			.catch((error) => {
				alert('Ошибка загрузки списка ' + data + '. Код ошибки - ' + error);
			});
	} else {
		return Promise.resolve(getData(data));
	}
};
