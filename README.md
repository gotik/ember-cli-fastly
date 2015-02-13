# Ember-cli-fastly

Addon for simplying Fastly API interaction

## Installation

* `ember install:npm ember-cli-fastly`

## Configuration

Create a file in the `config/fastly` directory with a name based on you environment

```javascript
module.exports = {
  accessKey: 'your_fastly_access_key',
  productId: 'your_fastly_product_id'
};
```

## Commands

+ `ember fastly:purge-all` purges all cache

## Running Tests

* `npm test`
