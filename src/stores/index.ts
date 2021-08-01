// ./src/stores/index.ts
import { createContext, useContext } from 'react';
import { STORE_ROUTER, RouterStore, history } from './router';
import { STORE_AUTH, AuthStore } from './auth';

function createStores() {
	return {
		[STORE_ROUTER]: new RouterStore(),
		[STORE_AUTH]: new AuthStore()
	};
}

const stores = createStores();

const StoresContext = createContext(stores);

const useStores = () => useContext(StoresContext);

function useRouterStore() {
	const { routerStore } = useStores();
	return routerStore;
}

function useAuthStore() {
	const { authStore } = useStores();
	return authStore;
}

export { stores, history, StoresContext, useRouterStore, useAuthStore };
