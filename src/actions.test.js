import {createTodo, toggleTodo, filterTodos} from "./actions";

describe("Create Todo yields a type text", ()=> {
    it("should call a CREATE_TODO action", function(){
        expect(createTodo("test")).toEqual({type: "CREATE_TODO", payload: "test"});
    })
})
describe("Toggle Todo yields a type text", ()=> {
    it("should call a TOGGLE_TODO action", function(){
        expect(toggleTodo("test")).toEqual({type: "TOGGLE_TODO", payload: "test"});
    })
})
describe("Filter Todo yields a type text", ()=> {
    it("should call a FILTER_TODO action", function(){
        expect(filterTodos("test")).toEqual({type: "FILTER_TODOS", payload: "test"});
    })
})
