let whitelist = ['直播', '推荐', '热门']

let body = $response.body
body = JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
    if (!(whitelist.includes(element['name']))) { body['data']['tab'].splice(index, 1) }
})

body['data']['bottom'].forEach((element, index) => {
    if (element['pos'] == 4) {
        body['data']['bottom'].splice(index, 1)
    }
})

body = JSON.stringify(body)
$done({ body })

