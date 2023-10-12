export interface IDispatch {
	type: string;
	value: any;
}

export const defaultActions = {
	setFormStage: () => null,
};

export interface IFormActions {
	setFormStage: (value: string) => void;
}

export const getActions = (dispatch: (args: IDispatch) => void) => {
	const setFormStage = (value: string) => {
		dispatch({ type: "SET_STAGE", value: value });
	};

	return {
		setFormStage,
	};
};
