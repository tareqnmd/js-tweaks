	const downloadZip = (file) => {
		const a = document.createElement('a');
		a.download = `${product.slug}.zip`;
		const url = URL.createObjectURL(file);
		a.href = url;
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(url);
	};

	const downloadImagesAsZip = async (allImgs) => {
		try {
			const imgUrls = allImgs.map((elm) => {
				const split_url_type = elm.split('.');
				const img_type = split_url_type[split_url_type.length - 1];
				const without_type = elm.split(`.${img_type}`)[0];
				const split_url_name = without_type.split(`/`);
				const img_name = split_url_name[split_url_name.length - 1];
				return {
					src: elm,
					type: img_type,
					name: img_name,
				};
			});
			const promises = imgUrls.map(async (elm) => {
				const res = await fetch(elm.src);
				const blob = res.blob();
				return blob;
			});
			const res = await Promise.all(promises);
			const zip = new JSZip();
			res.forEach((blob, index) => {
				zip.file(`${imgUrls[index].name}.${imgUrls[index].type}`, blob);
			});
			const zipFile = await zip.generateAsync({ type: 'blob' });
			downloadZip(zipFile);
		} catch (error) {
			console.log('error', error.message);
		}
	};

downloadImagesAsZip(['img1','img2']);
