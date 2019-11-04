/*
 * @Author: doramart 
 * @Date: 2019-09-26 09:19:25 
 * @Last Modified by:   doramart 
 * @Last Modified time: 2019-09-26 09:19:25 
 */
const _ = require('lodash');


let AdsController = {

    async getOne(ctx, app) {

        try {
            let name = ctx.query.name;

            let targetItem = await ctx.service.ads.item(ctx, {
                query: {
                    name: name,
                    state: true
                },
                populate: [{
                    path: 'items'
                }]
            });

            ctx.helper.renderSuccess(ctx, {
                data: targetItem
            });

        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }

    }

}

module.exports = AdsController;