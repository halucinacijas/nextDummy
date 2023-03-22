const _ = require("lodash")

const items = [1,[4,2,2, [5,4,3]]]

const newItems = _.flatMapDeep(items)

console.log(newItems);