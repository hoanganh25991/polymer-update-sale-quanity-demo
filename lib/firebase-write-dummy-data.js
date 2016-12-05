const util = require('./util');
const db = require('./firebase-connect-db');
const saleBranch = db.ref(util.saleBranch);

let writeDatPromise = saleBranch.set({
	stores: [
		{
			name: 'store A',
			address: '110A Quoc Huong, Thao Dien, Quan 2, Tp.HCM'
		},
		{
			name: 'store B',
			address: '268 To Hien Thanh, Phuong 15, Quan 10, Tp.HCM'
		}
	],
	products: [
		{
			store_id: 0,
			name: 'Xà lách',
			price: 35000,
			quanity: 15,
			type: 'kg'
		},
		{
			store_id: 0,
			name: 'Khoai lang',
			price: 23000,
			quanity: 45,
			type: 'kg'
		},
		{
			store_id: 0,
			name: 'Bí đỏ',
			price: 14000,
			quanity: 67,
			type: 'kg'
		},
		{
			store_id: 0,
			name: 'Hành lá',
			price: 16000,
			quanity: 100,
			type: 'kg'
		},
		{
			store_id: 0,
			name: 'Bó xôi',
			price: 27000,
			quanity: 65,
			type: 'kg'
		},
		{
			store_id: 1,
			name: 'Lá chè tươi',
			price: 85000,
			quanity: 11,
			type: 'kg'
		},
		{
			store_id: 1,
			name: 'Cà chua',
			price: 27000,
			quanity: 19,
			type: 'kg'
		},
		{
			store_id: 1,
			name: 'Cà tím',
			price: 43000,
			quanity: 56,
			type: 'kg'
		},
		{
			store_id: 1,
			name: 'Cải thảo',
			price: 68000,
			quanity: 14,
			type: 'kg'
		},
		{
			store_id: 1,
			name: 'Khoai tây',
			price: 23000,
			quanity: 87,
			type: 'kg'
		}
	]
});

console.log(writeDatPromise);

writeDatPromise.then(signal => {
	console.log('set succcess');
	console.log(signal);
	process.exit();
});