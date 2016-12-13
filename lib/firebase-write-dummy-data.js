const util = require('./util');
const db = require('./firebase-connect-db');
const saleBranch = db.ref(util.saleBranch);

let dumpData = {
	stores: [
		{
			name: 'store A',
			address: '110A Quoc Huong, Thao Dien, Quan 2, Tp.HCM'
		},
		{
			name: 'store B',
			address: '268 To Hien Thanh, Phuong 15, Quan 10, Tp.HCM'
		},
		{
			name: 'store C',
			address: '548 Dieb Bien Phu, Phuong 3, Quan Binh Thanh, Tp.HCM'
		}
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
		,{
			name: 'Cải thìa',
			price: 23000,
			quanity: 87,
			type: 'kg'
		}
	]
};

/**
 * Reset saleBranch
 */
async function updateData(){
	try{
		await saleBranch.set({});

		let storeUuids = [];

		let pa1 = dumpData.stores.map(store => {
			let uuid = db.ref(util.saleBranch + '/stores').push().key;
			storeUuids.push(uuid);
			return db.ref(util.saleBranch + '/stores/' + uuid).set(store);
		});

		await Promise.all(pa1);

		let pa2 = dumpData.products.map(product => {
			storeUuids.sort(function() {return 0.5 - Math.random()})
			product.store_id = storeUuids[0];
			return db.ref(util.saleBranch + '/products').push(product);
		});

		await Promise.all(pa2);
	} catch (e) {
		console.log(e);

		process.exit();
	}
	

	process.exit();
}

updateData();