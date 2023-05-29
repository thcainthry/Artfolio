const Product = require('../models/product');

exports.disableProducts = products => {
  let bulkOptions = products.map(item => {
    return {
      updateOne: {
        filter: { _id: item._id },
        update: { isActive: false }
      }
    };
  });

  Product.bulkWrite(bulkOptions);
};


        if (item.status !== '') {
          if (item.product?.taxable && item.priceWithTax === 0) {
            const taxAmount = price * (taxRate / 100) * 100;
            item.totalTax = parseFloat(
              Number((taxAmount * quantity).toFixed(2))
            );

            order.totalTax += item.totalTax;
          } else {
            order.totalTax += item.totalTax;
          }
        }


exports.caculateOrderTotal = order => {
  const total = order.products
    .filter(item => item.status !== 'Cancelled')
    .reduce((sum, current) => sum + current.totalPrice, 0);

  return total;
};

// calculate order tax amount

  const products = items.map(item => {
    item.totalPrice = 0;
    item.purchasePrice = item.price;

    const price = item.purchasePrice;
    const quantity = item.quantity;
    item.totalPrice = parseFloat(Number((price * quantity).toFixed(2)));

    return item;
  });

  return products;


exports.formatOrders = orders => {
  const newOrders = orders.map(order => {
    return {
      _id: order._id,
      total: parseFloat(Number(order.total.toFixed(2))),
      created: order.created,
      products: order?.cart?.products
    };
  });

  return newOrders.map(order => {
    return order?.products ? this.caculateTaxAmount(order) : order;
  });
};
