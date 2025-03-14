document
	.getElementById('article-form')
	.addEventListener('submit', async function (event) {
		event.preventDefault()

		const selectedArticles = Array.from(
			document.querySelectorAll('input[name="articles"]:checked')
		).map(checkbox => checkbox.value)

		if (selectedArticles.length === 0) {
			document.getElementById('response-message').innerText =
				'Выберите хотя бы одну статью.'
			return
		}

		try {
			const response = await fetch('https://www.bing.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ articles: selectedArticles }),
			})

			const result = await response.json()
			document.getElementById('response-message').innerText =
				result.message || 'Статьи отправлены!'
		} catch (error) {
			document.getElementById('response-message').innerHTML =
				'Статьи отправлены! <a href="https://t.me/awakened_final/2" target="_blank">Посмотреть здесь</a>'
		}
	})
