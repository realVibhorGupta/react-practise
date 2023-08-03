import { expect } from "chai";
import { todosReducer } from "../../redux/reducers";

describe("The todos reducer", () => {
	it("Adds a new Todo whe CREATE TODO action is received.", () => {
		const fakeTodo = { text: "hello", isCompleted: false };
		const fakeAction = {
			type: "CREATE_TODO",
			payload: {
				todo: fakeTodo,
			},
		};
		const originalState = { isLoading: false, data: [] };
		const expected = {
			isLoading: false,
			data: [fakeTodo],
		};

		const actual = todosReducer(originalState, fakeAction);

		expect(actual).to.deep.equal(expected);
	});
});
