import { expect} from 'chai';
import { todosReducer } from '../../redux/reducers';


describe('The todos reducer', () => {
	it('Adds a new Todo whe CREATE TODO action is received.',()=>{
		const fakeTodo = 	 { text : 'hello' , isCompleted : false};
		const fakeAction = {
				type : 'CREATE_TODO',
				payload:{
					
				}
		}
	})

 })