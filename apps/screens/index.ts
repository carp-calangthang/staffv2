export { default as HomeScreen } from './Home/Home';

// Inventory
export { default as StockScreens } from './Inventory/StockControl';
export { default as DepotScreens } from './Inventory/depot/Depot';

// Order
export { default as OrderApprove } from './Inventory/order/staff/OrderApprove';
export { default as OrderCreate } from './Inventory/order/staff/OrderCreate';
export { default as OrderCreate2 } from './Inventory/order/staff/OrderCreate2';
export { default as OrderList } from './Inventory/order/staff/OrderDelivery';
export { default as OrderDetail } from './Inventory/order/staff/OrderDetail';
export { default as OrderEmpty } from './Inventory/order/staff/OrderEmpty';
export { default as OrderManager } from './Inventory/order/Manager/OrderManager';
export { default as OrderManagerEdit } from './Inventory/order/staff/OrderEdit';
export { default as OrderManagerView } from './Inventory/order/Manager/OrderManagerView';
export { default as OrderReceive } from './Inventory/order/staff/OrderReceive';
export { default as OrderDelivery } from './Inventory/order/staff/OrderDelivery';

// Request Product
export { default as CreateRequest } from './Inventory/RequestProduct/Create/CreateRequest';
export { default as RequestsList } from './Inventory/RequestProduct/List/RequestsList';
export { default as DoneCreate } from './Inventory/RequestProduct/Create/DoneCreate';
export { default as DeliveryList } from './Inventory/RequestProduct/List/DeliveryList';
export { default as Receive } from './Inventory/RequestProduct/Transport/Receive';
export { default as Delivery } from './Inventory/RequestProduct/Transport/Delivery';

// request cancel

export { default as NewRequests } from './Inventory/Cancel/NewRequest';
export { default as SendRequest } from './Inventory/Cancel/SendRequest';
export { default as NewRequestsList } from './Inventory/Cancel/NewRequestsList';
export { default as WaitingList } from './Inventory/Cancel/CancelWaiting';
export { default as DetailRequest } from './Inventory/Cancel/DetailRequest';