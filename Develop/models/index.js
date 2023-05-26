// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// establish associations btwn models using asociation method in sequalize-- look at format in notes
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // foreign key column in Product model that references Category model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', 
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // **Define  intermediary model used to establish the relationship
  foreignKey: 'product_id', // Define fk column in ProductTag model that referencesProduct model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,   //** 
  foreignKey: 'tag_id', // Define fk column in ProductTag model that references Tag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

