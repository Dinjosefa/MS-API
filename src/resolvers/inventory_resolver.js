const inventoryResolver = {
	Query: {
		inventoryDetailById: (_, { inventoryId }, { dataSources }) => {
			return dataSources.inventoryAPI.getInventory(inventoryId);
		},
		inventoriesDetail: (_, __, { dataSources }) => dataSources.inventoryAPI.getInventories()
	},
	Mutation: {
		newInventory: (_, { inventoryInput }, { dataSources }) => {
			const inventoryInput2 = {
				title: inventoryInput.title,
				author: inventoryInput.author,
				year: inventoryInput.year,
				category: inventoryInput.category,
				editorial: inventoryInput.editorial,
				status: inventoryInput.status,
				isbn: inventoryInput.isbn,
				poster: inventoryInput.poster,
				resume: inventoryInput.resume
			};
			return dataSources.inventoryAPI.createInventory(inventoryInput2);
		},
        updateInventory: (_, { inventoryId, inventoryUpdateInput }, { dataSources }) => {
			const InventoryUpdateInput = {
				title: inventoryUpdateInput.title || null,
				author: inventoryUpdateInput.author  || null,
				year: inventoryUpdateInput.year  || null,
				category: inventoryUpdateInput.category  || null,
				editorial: inventoryUpdateInput.editorial  || null,
				status: inventoryUpdateInput.status  || null,
				isbn: inventoryUpdateInput.isbn  || null,
				poster: inventoryUpdateInput.poster  || null,
				resume: inventoryUpdateInput.resume  || null,
			};
			return dataSources.inventoryAPI.updateInventory(inventoryId, InventoryUpdateInput);
		},
		delInventory: (_, { inventoryId }, { dataSources }) => dataSources.inventoryAPI.delInventory(inventoryId)
	}
};
module.exports = inventoryResolver;
