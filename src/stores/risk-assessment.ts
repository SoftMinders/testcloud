import { createHook, createStore, StoreActionApi } from "react-sweet-state";
import { Api, StateContext } from "services";

type StateType = StateContext<any>;

const initialState = (): StateType => {
	return <StateType>{
		state: {},
		fetched: false,
	};
};

const actions = {
	save:
		(data: any) =>
		async ({ setState }: StoreActionApi<StateType>): Promise<void> => {
			const api = new Api<any>();
			const newState: Partial<StateType> = {
				fetching: true,
				fetched: false,
			};
			setState(newState);
			try {
				api.url = `${process.env.REACT_APP_HTTP_DOMAIN}/risk/assessment`;
				api.method = "POST";
				api.data = {
					data,
				};
				const res = await api.send();
				setState({ state: res.data, fetched: true, fetching: false });
			} catch {
				setState({ ...initialState(), fetching: false });
				return initialState().state;
			}
		},
	reset:
		() =>
		({ setState }: StoreActionApi<StateType>) => {
			setState(initialState());
		},
};

/**
 * The store for risk assessment models
 */
export const RiskAssessment = createStore<StateType, typeof actions>({
	name: "risk-assessment",
	initialState: initialState(),
	actions,
});

/**
 * The hook to use the `RiskAssessment`.
 */
export const useRiskAssessment = createHook(RiskAssessment);
