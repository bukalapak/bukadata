const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  DataSupplier.registerDataSupplier('public.text', 'Product Name', 'SupplyProductName')
  DataSupplier.registerDataSupplier('public.text', 'Product Category', 'SupplyProductCategory')
  DataSupplier.registerDataSupplier('public.text', 'Product Review', 'SupplyProductReview')
  // DataSupplier.registerDataSupplier('public.text', 'Price', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Provinces', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Cities', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Districs', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Postal Code', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Couriers', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Bukalapak Bank Accounts', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Airlines', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Airport', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Countries', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Airport Train Stations', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Attraction', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Popular Destination', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Vehicle Brands', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Vehicle Model', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Vehicle Reviews', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Event List', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Popular Event', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'BukaTalks Event', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.text', 'Polling Event', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.image', 'Product Image', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.image', 'User Photo', 'SupplyData')
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyProductName (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = Math.random().toString()
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onSupplyProductCategory (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = Math.random().toString()
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onSupplyProductReview (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = Math.random().toString()
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}
