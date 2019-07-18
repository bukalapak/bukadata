const sketch = require("sketch");
const { DataSupplier, UI } = sketch;
const util = require("util");

const API_TOKEN = "";
const API_URL = "";

export function onStartup() {
  DataSupplier.registerDataSupplier(
    "public.text",
    "Product Name",
    "SupplyProductName"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Product Category",
    "SupplyProductCategory"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Product Review",
    "SupplyProductReview"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Full Name",
    "SupplyFullName"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "First Name",
    "SupplyFirstName"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Last Name",
    "SupplyLastName"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Phone Number",
    "SupplyPhoneNumber"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Phone Number (Masking)",
    "SupplyPhoneNumberMask"
  );

  DataSupplier.registerDataSupplier(
    "public.image",
    "Product Image",
    "SupplyProductImage"
  );
  DataSupplier.registerDataSupplier(
    "public.image",
    "Profile Picture",
    "SupplyProfilePicture"
  );

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

export function onShutdown() {
  DataSupplier.deregisterDataSuppliers();
}

export function onSetAPIToken(context) {
  UI.message("Not yet developed.");
}

export function onAbout(context) {
  NSWorkspace.sharedWorkspace().openURL(
    NSURL.URLWithString("https://github.com/afnizarnur")
  );
}

export function onSendFeedbackIdeas(context) {
  NSWorkspace.sharedWorkspace().openURL(
    NSURL.URLWithString("https://github.com/afnizarnur")
  );
}

export function onSupplyProductName(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyProductCategory(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyProductReview(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyFullName(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyFirstName(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyLastName(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyPhoneNumber(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyPhoneNumberMask(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyProfilePicture(context) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data = Math.random().toString();
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
