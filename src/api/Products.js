import products from "./products-data.json";

export class Products {
  static getProducts() {
    return new Promise((resolve, reject) => {
      if (products) {
        resolve(products);
      } else {
        reject();
      }
    });
  }

  static getProductById(id, route) {
    return new Promise((resolve, reject) => {

      let test;

      switch (route) {
        case 'items':
          test = products.items;
          break;
        case 'itemsVersion':
          test = products.itemsVersion
          break;
        case 'itemsColor':
          test = products.itemsColor
          break;
        case 'itemsOptions':
          test = products.itemsOptions
          break;
        default:
          test = products.items;
          break;
      }

      const product = test.find(p => p.id === parseInt(id));

      if (product) {
        resolve(product);
      } else {
        reject();
      }
    });
  }
}