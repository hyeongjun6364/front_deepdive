import { render,screen } from "@testing-library/react"
import Async from "./Async"
describe('Async component',()=>{
    test('render async component',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async ()=> [{id:'p1',title:'First post'}]
        })
        render(<Async/>)

        const listItemElements = await screen.findAllByRole('listitem',{exact:false});
        expect(listItemElements).not.toHaveLength(0)
    })
})