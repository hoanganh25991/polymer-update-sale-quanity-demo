const util = require('./util');
const db = require('./firebase-connect-db');
const saleBranch = db.ref(util.saleBranch);
const faker = require('faker/locale/vi');

let dumpData = {
	users: [
		{
			email: 'baophanduy@gmail.com'
		},
		{
			email: 'lehoanganh25991@gmail.com'
		}
	],
	stores: [],
	product_categories: [
		{
			name: 'Bán lẻ',
		},
		{
			name: 'Bán sỉ',
		},
	],
	products: [
		{
			name: 'Xà lách',
			price: 35000,
			quanity: 15,
			type: 'kg'
		},
		{
			name: 'Khoai lang',
			price: 23000,
			quanity: 45,
			type: 'kg'
		},
		{
			name: 'Bí đỏ',
			price: 14000,
			quanity: 67,
			type: 'kg'
		},
		{
			name: 'Hành lá',
			price: 16000,
			quanity: 100,
			type: 'kg'
		},
		{
			name: 'Bó xôi',
			price: 27000,
			quanity: 65,
			type: 'kg'
		},
		{
			name: 'Lá chè tươi',
			price: 85000,
			quanity: 11,
			type: 'kg'
		},
		{
			name: 'Cà chua',
			price: 27000,
			quanity: 19,
			type: 'kg'
		},
		{
			name: 'Cà tím',
			price: 43000,
			quanity: 56,
			type: 'kg'
		},
		{
			name: 'Cải thảo',
			price: 68000,
			quanity: 14,
			type: 'kg'
		},
		{
			name: 'Khoai tây',
			price: 23000,
			quanity: 87,
			type: 'kg'
		},
		{
			name: 'Cải ngọt',
			price: 23000,
			quanity: 87,
			type: 'kg'
		},
		{
			name: 'Hành tím',
			price: 23000,
			quanity: 87,
			type: 'kg'
		}
		, {
			name: 'Cải thìa',
			price: 23000,
			quanity: 87,
			type: 'kg'
		}
	]
};


/**
 * Generate random data by Faker
 */
/**
 * Code for users
 */
dumpData.users.forEach(user =>{
	user.code = 'U' + faker.random.number({min: 100, max: 999});
});
/**
 * Generate stores
 */
let numStores = 15;
// for(let i = 0; i < numStores; i++){
// 	let userEmail = dumpData.users.sort(sort(function(){
// 		return 0.5 - Math.random()
// 	}))[0];
// 	let store = {
// 		name: 'Cửa hàng ' + faker.name.firstName(),
// 		address: faker.address.streetAddress(),
// 		by: userEmail,
// 		code: 'S' + faker.random.number({min: 100, max: 999})
// 	};
//
// 	dumpData.stores.push(store);
// }
let stores = Array.apply(null, Array(numStores));
dumpData.stores = stores.map(()=>{
	let userEmail = dumpData.users.sort(() =>{
		return 0.5 - Math.random();
	})[0]['email'];
	return {
		name: 'Cửa hàng ' + faker.name.firstName(),
		address: faker.address.streetAddress() + ' Hồ Chí Minh',
		by: userEmail,
		code: 'S' + faker.random.number({min: 100, max: 999})
	};
});

/**
 * Code for product categories
 */
dumpData.product_categories.forEach(category =>{
	category.code = 'PC' + faker.random.number({min: 100, max: 999});
});

/**
 * Generate code for product & randome category_code
 */
dumpData.products.forEach(product =>{
	let pCs = dumpData.product_categories;
	product.category_code = pCs.sort(()=>{
		return 0.5 - Math.random();
	})[0]['code'];
});

/**
 * Reset saleBranch
 */
async function updateData(){
	try{
		await saleBranch.set({});

		let branchs = Object.keys(dumpData);

		let promises = [];
		branchs.forEach(branch =>{
			promises = promises.concat(dumpData[branch].map(obj =>{
				return db.ref(`${util.saleBranch}/${branch}`).push(obj);
			}));
		});

		await Promise.all(promises);
	}catch(e){
		console.log(e);

		process.exit();
	}

	process.exit();
}

updateData();