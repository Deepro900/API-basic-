const user = { id: 1, name: 'Deepro ', Job: 'Engineer' };
console.log(user);

const shop = {
    owner: 'Krisna',
    address: {
        street: 'andhreri nagar',
        city: 'Mumbai',
        country: 'India'
    },
    product: ['Laptop', 'Mac', 'Monitor', 'keybord'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);