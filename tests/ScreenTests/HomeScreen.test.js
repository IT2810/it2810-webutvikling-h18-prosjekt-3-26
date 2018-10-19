import Homescreen from '../../src/screens/HomeScreen';


beforeEach(() => {
    homescreencomp = new Homescreen();
})

test('homescreens gets properly created', ()=> {
    expect(homescreencomp).toBeDefined();

});
