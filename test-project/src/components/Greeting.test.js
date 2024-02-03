import Greeting from "./Greeting"
import { render,screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
describe('greeting component',()=>{
    test('renders hello World as a text',()=>{
        //arrange
        render(<Greeting/>)
    
        //act
        //..nothing
    
        //assert
        const helloworldElement = screen.getByText('hello world',{exact:false});
        expect(helloworldElement).toBeInTheDocument()
    })
    test('render Its good to see you!',()=>{
        render(<Greeting/>)
    
        const goodtimeElement = screen.getByText(`It's good to see you!`)
        expect(goodtimeElement).toBeInTheDocument()
    })
    test('renders changed',()=>{
        //arrange
        render(<Greeting/>)
        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        //assert
        const changedElement = screen.getByText('Changed!',{exact:false});
        expect(changedElement).toBeInTheDocument();
    })
    test('render Its good to see you!2',()=>{
        render(<Greeting/>)

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const goodtimeElement = screen.queryByText(`It's good to see you!`)
        //expect(goodtimeElement).not.toBeInTheDocument()
        expect(goodtimeElement).toBeNull()
    })
})


