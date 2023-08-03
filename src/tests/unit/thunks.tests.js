import { expect } from "chai";
import { loadTodos } from "../../redux/thunks";
import sinon from "sinon";
describe("Load Todos thunk", () => {
	//sinon function is a fake function to get the
	it("dispatches correct actions in the Success Scenario", async () => {
		const fakeDispatch = sinon.spy();
		const fakeTodos = [{ text: 1 }, { text: 2 }];
		fetchMock.get('http://localhost:8080/todos',fakeTodos)


		const expectedFirstAction = { type : 'LOAD_TODOS_IN_PROGRESS'}
		const expectedSecondAction =  { type : 'LOAD_TODOS_IN_SUCCESS' ,
		payload: {
			todos:fakeTodos
		}
	}

	await loadTodos()(fakeDispatch)
	expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
	expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

	fetchMock.reset();
	});
});
