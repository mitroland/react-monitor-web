const cheerio = require("cheerio")
const axios = require("axios")

class Fabelio {
    constructor(url, failure_repeat) {
        this.url = url
        this.failure_repeat = failure_repeat
    }

    async fetchPage(url, failure_repeat) {
        try {
            const result = await axios.get(url)
            return result.data
        } catch(err) {
            return await this.fetchPage(url, failure_repeat - 1)
        }
    }

    async getData() {
        try {
            let html = await this.fetchPage(this.url, this.failure_repeat)
            let $ = cheerio.load(html)

            let title_wrapper = $('.page-title-wrapper')
            let product_id = title_wrapper.find('div#product-ratings').attr('data-product-id')
            let title = title_wrapper.find('h1.page-title > span').text()
            let sub_title = title_wrapper.find('.page-title__secondary').text()

            let product_info_wrapper = $('.product-info-main')
            let special_price = product_info_wrapper.find('span.special-price').find('span.price').text()
            let old_price = product_info_wrapper.find('span.old-price').find('span.price').text()
            let final_price = !special_price ? product_info_wrapper.find('.price-final_price').find('.price').text() : ''

            let image_script = $('body > script').map((i, x) => x.children[0]).filter((i, x) => x && x.data.match(/magnifierOpts/)).get(0)
            let image_data = JSON.parse(image_script.data)
            let images = image_data['[data-gallery-role=gallery-placeholder]']['mage/gallery/gallery'].data
            let image_url = images.map(item => item.img)

            let og_url = $("meta[property='og:url']").attr("content")
            let slug_arr = og_url.split("/")
            let slug = slug_arr[slug_arr.length - 1]

            let result = {
                id : parseInt(product_id),
                slug : slug,
                title : title,
                sub_title : sub_title,
                final_price : final_price,
                special_price : special_price,
                old_price : old_price,
                image_url : image_url
            }

            return {
                success : true,
                data : result
            }
        } catch (e) {
            return {
                success : false,
                data : null
            }
        }
    }
}

module.exports = Fabelio;
