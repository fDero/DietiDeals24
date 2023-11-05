/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export function HookRouter(Component: any) {
	return function Hooked(props: any) {
		const navigate: NavigateFunction = useNavigate();
		return <Component {...props} navigate={navigate} />;
	};
}
